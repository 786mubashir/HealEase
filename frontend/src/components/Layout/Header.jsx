import React from 'react';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { LogOut, Heart, User } from 'lucide-react';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="glass-effect border-b border-dark-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center glow">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold gradient-text">
              HealEase
            </h1>
          </div>
          
          {user && (
            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <span className="text-dark-300">Welcome, </span>
                <span className="font-semibold text-dark-100">{user.name}</span>
                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-500/20 text-primary-300 border border-primary-500/30">
                  {user.role === 'doctor' ? '👨‍⚕️ Doctor' : '👤 Patient'}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-dark-300 hover:text-primary-400 transition-colors duration-200 hover:bg-dark-700/50 px-3 py-2 rounded-lg"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;