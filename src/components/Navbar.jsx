import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Landmark, Search, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Help Center', path: '/help-center' },
    { name: 'Resources', path: '/resources' },
    { name: 'News', path: '/news' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <Landmark className="text-gov-blue-700 dark:text-gov-blue-400 group-hover:scale-110 transition-transform" size={32} />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-gov-blue-900 dark:text-gray-100 leading-tight uppercase tracking-tight">State Transport Department</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium tracking-widest uppercase">Conceptual Interface Prototype</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-bold transition-all ${
                    isActive
                      ? 'text-gov-blue-700 dark:text-gov-blue-400 bg-gov-blue-50 dark:bg-gov-blue-900/40 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gov-blue-700 dark:hover:text-gov-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>
            <Link to="/dashboard" className="p-2 text-gray-400 dark:text-gray-500 hover:text-gov-blue-700 dark:hover:text-gov-blue-400 transition-colors">
              <User size={20} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gov-blue-700 dark:hover:text-gov-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gov-blue-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-bold ${
                    isActive
                      ? 'text-gov-blue-700 dark:text-gov-blue-400 bg-gov-blue-50 dark:bg-gov-blue-900/40 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gov-blue-700 dark:hover:text-gov-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
