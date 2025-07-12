import React from 'react';
import { Stethoscope, Clock, Mail, Phone, Heart } from 'lucide-react';

const DoctorList = ({ doctors }) => {
  return (
    <div className="card overflow-hidden">
      <div className="p-6 border-b border-dark-700/50">
        <h2 className="text-xl font-semibold text-dark-100 flex items-center">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mr-3 glow">
            <Stethoscope className="h-4 w-4 text-white" />
          </div>
          Available Doctors
        </h2>
      </div>
      
      <div className="divide-y divide-dark-700/50">
        {doctors.map((doctor) => (
          <div key={doctor._id} className="p-6 hover:bg-dark-700/30 transition-all duration-200 group">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-dark-100 group-hover:gradient-text transition-all duration-300">
                  Dr. {doctor.name}
                </h3>
                <p className="text-primary-400 font-medium mt-1">{doctor.specialization}</p>
                
                <div className="flex items-center space-x-4 mt-3 text-sm text-dark-300">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-primary-400" />
                    {doctor.experience} years experience
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-1 text-accent-400" />
                    {doctor.email}
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-1 text-primary-400" />
                    {doctor.phone}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-500/20 text-primary-300 border border-primary-500/30">
                  Available
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {doctors.length === 0 && (
        <div className="p-8 text-center text-dark-400">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-8 w-8 text-primary-400" />
          </div>
          <p>No doctors available at the moment</p>
        </div>
      )}
    </div>
  );
};

export default DoctorList;