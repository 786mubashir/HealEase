import React, { useState } from "react";
import { appointmentService } from "../services/appointmentService.js";
import { Calendar, Clock, User, FileText, Send, Heart } from "lucide-react";

const AppointmentForm = ({ doctors, onAppointmentBooked }) => {
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    time: "",
    reason: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await appointmentService.createAppointment(formData);
      setSuccess("Appointment booked successfully!");
      setFormData({
        doctor: "",
        date: "",
        time: "",
        reason: "",
        notes: "",
      });
      onAppointmentBooked();
    } catch (error) {
      setError(error.response?.data?.message || "Failed to book appointment");
    } finally {
      setLoading(false);
    }
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="card">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-dark-100 flex items-center">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mr-3 glow">
            <Calendar className="h-4 w-4 text-white" />
          </div>
          Book New Appointment
        </h2>
        <p className="text-dark-300 mt-1">
          Schedule an appointment with a doctor
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-xl text-primary-400 text-sm">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-dark-200 mb-2">
            Select Doctor
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-dark-400" />
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
              className="input-field w-full pl-10 pr-4"
            >
              <option value="">Choose a doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor._id} value={doctor._id}>
                  Dr. {doctor.name} - {doctor.specialization}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-dark-200 mb-2">
              Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-dark-400" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={today}
                className="input-field w-full pl-10 pr-4"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-200 mb-2">
              Time
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 h-5 w-5 text-dark-400" />
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="input-field w-full pl-10 pr-4"
              >
                <option value="">Select time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-dark-200 mb-2">
            Reason for Visit
          </label>
          <div className="relative">
            <FileText className="absolute left-3 top-3 h-5 w-5 text-dark-400" />
            <input
              type="text"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="input-field w-full pl-10 pr-4"
              placeholder="Brief description of your health concern"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-dark-200 mb-2">
            Additional Notes (Optional)
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={4}
            className="input-field w-full"
            placeholder="Any additional information you'd like to share with the doctor"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Booking...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Send className="h-4 w-4 mr-2" />
              Book Appointment
            </div>
          )}
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
