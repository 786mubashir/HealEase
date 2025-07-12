import React from 'react';
import { Users, Mail, Phone, Heart } from 'lucide-react';

const PatientList = ({ patients }) => {
  return (
    <div className="card overflow-hidden">
      <div className="p-6 border-b border-dark-700/50">
        <h2 className="text-xl font-semibold text-dark-100 flex items-center">
          <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg flex items-center justify-center mr-3 glow">
            <Users className="h-4 w-4 text-white" />
          </div>
          Registered Patients
        </h2>
      </div>
      
      <div className="divide-y divide-dark-700/50">
        {patients.map((patient) => (
          <div key={patient._id} className="p-6 hover:bg-dark-700/30 transition-all duration-200 group">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-dark-100 group-hover:gradient-text transition-all duration-300">
                  {patient.name}
                </h3>
                
                <div className="flex items-center space-x-4 mt-3 text-sm text-dark-300">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-1 text-accent-400" />
                    {patient.email}
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-1 text-primary-400" />
                    {patient.phone}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-500/20 text-accent-300 border border-accent-500/30">
                  Patient
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {patients.length === 0 && (
        <div className="p-8 text-center text-dark-400">
          <div className="w-16 h-16 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-8 w-8 text-accent-400" />
          </div>
          <p>No patients registered yet</p>
        </div>
      )}
    </div>
  );
};

export default PatientList;