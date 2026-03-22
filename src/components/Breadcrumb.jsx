import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (location.pathname === '/') return null;

  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gov-blue-700 transition-colors"
          >
            <Home size={16} className="mr-2" />
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const label = value
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

          return (
            <li key={to}>
              <div className="flex items-center">
                <ChevronRight size={16} className="text-gray-400 mx-1" />
                {last ? (
                  <span className="ml-1 text-sm font-semibold text-gov-blue-800 md:ml-2">
                    {label}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gov-blue-700 md:ml-2 transition-colors"
                  >
                    {label}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
