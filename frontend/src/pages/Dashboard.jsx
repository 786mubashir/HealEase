import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";
import { userService } from "../services/userService.js";
import { appointmentService } from "../services/appointmentService.js";
import DoctorList from "../components/DoctorList.jsx";
import PatientList from "../components/PatientList.jsx";
import AppointmentForm from "../components/AppointmentForm.jsx";
import AppointmentList from "../components/AppointmentList.jsx";
import StatsCard from "../components/StatsCard.jsx";
import { Calendar, Users, Clock, Activity, Heart } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [doctorsRes, patientsRes, appointmentsRes] = await Promise.all([
        userService.getDoctors(),
        userService.getPatients(),
        appointmentService.getAppointments(),
      ]);

      setDoctors(doctorsRes.doctors);
      setPatients(patientsRes.patients);
      setAppointments(appointmentsRes.appointments);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAppointmentBooked = () => {
    loadData();
  };

  const handleAppointmentCancelled = () => {
    loadData();
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: Activity },
    { id: "doctors", label: "Doctors", icon: Users },
    { id: "patients", label: "Patients", icon: Users },
    { id: "book", label: "Book Appointment", icon: Calendar },
    { id: "appointments", label: "Appointments", icon: Clock },
  ];

  const getStats = () => {
    const totalAppointments = appointments.length;
    const pendingAppointments = appointments.filter(
      (app) => app.status === "pending"
    ).length;
    const confirmedAppointments = appointments.filter(
      (app) => app.status === "confirmed"
    ).length;

    return {
      totalDoctors: doctors.length,
      totalPatients: patients.length,
      totalAppointments,
      pendingAppointments,
      confirmedAppointments,
    };
  };

  const stats = getStats();

  if (loading) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 glow">
            <Heart className="h-10 w-10 text-white animate-pulse" />
          </div>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto"></div>
          <p className="mt-4 text-dark-300">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2 text-shadow">
            Welcome, {user.name}
          </h1>
          <p className="text-dark-300 text-lg">
            {user.role === "doctor"
              ? "Manage your appointments and patients"
              : "Book appointments and manage your healthcare"}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="card mb-8">
          <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg whitespace-nowrap transition-all duration-200 ${
                  activeTab === id
                    ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg"
                    : "text-dark-300 hover:text-dark-100 hover:bg-dark-700/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 animate-fade-in">
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatsCard
                title="Total Doctors"
                value={stats.totalDoctors}
                icon={Users}
                color="primary"
              />
              <StatsCard
                title="Total Patients"
                value={stats.totalPatients}
                icon={Users}
                color="accent"
              />
              <StatsCard
                title="Total Appointments"
                value={stats.totalAppointments}
                icon={Calendar}
                color="primary"
              />
              <StatsCard
                title="Pending Appointments"
                value={stats.pendingAppointments}
                icon={Clock}
                color="accent"
              />
              <StatsCard
                title="Confirmed Appointments"
                value={stats.confirmedAppointments}
                icon={Activity}
                color="primary"
              />
            </div>
          )}

          {activeTab === "doctors" && <DoctorList doctors={doctors} />}

          {activeTab === "patients" && user.role === "doctor" && (
            <PatientList patients={patients} />
          )}

          {activeTab === "book" && user.role === "patient" && (
            <AppointmentForm
              doctors={doctors}
              onAppointmentBooked={handleAppointmentBooked}
            />
          )}

          {activeTab === "appointments" && (
            <AppointmentList
              appointments={appointments}
              onAppointmentCancelled={handleAppointmentCancelled}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
