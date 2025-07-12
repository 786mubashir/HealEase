import React from 'react';

const StatsCard = ({ title, value, icon: Icon, color = 'primary' }) => {
  const colorClasses = {
    primary: 'bg-gradient-to-br from-primary-500/20 to-primary-600/20 text-primary-400 border-primary-500/30',
    accent: 'bg-gradient-to-br from-accent-500/20 to-accent-600/20 text-accent-400 border-accent-500/30'
  };

  return (
    <div className="card hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-dark-300">{title}</p>
          <p className="text-3xl font-bold text-dark-100 mt-1 group-hover:gradient-text transition-all duration-300">{value}</p>
        </div>
        <div className={`p-3 rounded-lg border ${colorClasses[color]} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;