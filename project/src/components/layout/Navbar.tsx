import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Logo } from '../ui/Logo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { 
  User, 
  LogOut, 
  Map, 
  MessageSquare, 
  FileText, 
  Briefcase,
  LayoutDashboard 
} from 'lucide-react';

export function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/roadmaps', label: 'Roadmaps', icon: Map },
    { path: '/interview', label: 'Mock Interview', icon: MessageSquare },
    { path: '/resume', label: 'Resume Builder', icon: FileText },
    { path: '/jobs', label: 'Job Board', icon: Briefcase },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 glass-morphism border-b border-slate-200 dark:border-slate-700 z-50 transition-colors duration-300 shadow-2xl backdrop-blur-lg" style={{minHeight:'4rem'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group transform hover:scale-110 transition-all card-3d" style={{transform:'translateZ(10px)'}}>
            <Logo className="group-hover:scale-110 transition-transform" />
          </Link>

          <div className="flex items-center space-x-4">
            {/* Navigation Links */}
            {user && (
              <div className="hidden md:flex space-x-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all transform hover:scale-105 shadow-sm hover:shadow-md ${
                        location.pathname === item.path
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Menu */}
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center depth-layer-2 shadow-lg">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">
                    {user.name}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all transform hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:block">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 px-3 py-2 text-sm font-medium transition-all transform hover:scale-105"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-medium rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}