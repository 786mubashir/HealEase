import React from 'react';
import { appointmentService } from '../services/appointmentService.js';
import { Calendar, Clock, User, FileText, X, Check, Heart } from 'lucide-react';

const AppointmentList = ({ appointments, onAppointmentCancelled }) => {
  const handleCancelAppointment = async (appointmentId) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      try {
        await appointmentService.cancelAppointment(appointmentId);
        onAppointmentCancelled();
      } catch (error) {
        console.error('Error cancelling appointment:', error);
        alert('Failed to cancel appointment');
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'confirmed':
        return 'bg-primary-500/20 text-primary-300 border-primary-500/30';
      case 'cancelled':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'completed':
        return 'bg-accent-500/20 text-accent-300 border-accent-500/30';
      default:
        return 'bg-dark-500/20 text-dark-300 border-dark-500/30';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="card overflow-hidden">
      <div className="p-6 border-b border-dark-700/50">
        <h2 className="text-xl font-semibold text-dark-100 flex items-center">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mr-3 glow">
            <Calendar className="h-4 w-4 text-white" />
          </div>
          Your Appointments
        </h2>
      </div>
      
      <div className="divide-y divide-dark-700/50">
        {appointments.map((appointment) => (
          <div key={appointment._id} className="p-6 hover:bg-dark-700/30 transition-all duration-200 group">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <h3 className="text-lg font-semibold text-dark-100 group-hover:gradient-text transition-all duration-300">
                    {appointment.doctor ? `Dr. ${appointment.doctor.name}` : 'Unknown Doctor'}
                  </h3>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(appointment.status)}`}>
                    {appointment.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div className="flex items-center text-sm text-dark-300">
                    <Calendar className="h-4 w-4 mr-2 text-primary-400" />
                    {formatDate(appointment.date)}
                  </div>
                  <div className="flex items-center text-sm text-dark-300">
                    <Clock className="h-4 w-4 mr-2 text-accent-400" />
                    {appointment.time}
                  </div>
                </div>

                {appointment.doctor?.specialization && (
                  <div className="flex items-center text-sm text-dark-300 mb-3">
                    <User className="h-4 w-4 mr-2 text-primary-400" />
                    {appointment.doctor.specialization}
                  </div>
                )}

                <div className="flex items-start text-sm text-dark-300 mb-3">
                  <FileText className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-accent-400" />
                  <span>{appointment.reason}</span>
                </div>

                {appointment.notes && (
                  <div className="text-sm text-dark-300 bg-dark-800/50 p-3 rounded-lg border border-dark-700/50">
                    <strong>Notes:</strong> {appointment.notes}
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                {appointment.status === 'pending' && (
                  <button
                    onClick={() => handleCancelAppointment(appointment._id)}
                    className="inline-flex items-center px-3 py-1.5 border border-red-500/30 text-sm font-medium rounded-lg text-red-400 bg-red-500/10 hover:bg-red-500/20 transition-all duration-200"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Cancel
                  </button>
                )}
                
                {appointment.status === 'confirmed' && (
                  <div className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-lg text-primary-300 bg-primary-500/20 border border-primary-500/30">
                    <Check className="h-4 w-4 mr-1" />
                    Confirmed
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {appointments.length === 0 && (
        <div className="p-8 text-center text-dark-400">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-8 w-8 text-primary-400" />
          </div>
          <p>No appointments found</p>
        </div>
      )}
    </div>
  );
};

export default AppointmentList;