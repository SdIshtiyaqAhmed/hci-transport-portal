import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const ServiceCard = ({ id, title, description, icon, path }) => {
  const IconComponent = Icons[icon] || Icons.HelpCircle;

  return (
    <Link 
      to={path}
      className="card group flex flex-col h-full hover:border-gov-blue-300 dark:hover:border-gov-blue-500 transition-all duration-300"
    >
      <div className="bg-gov-blue-50 dark:bg-gov-blue-900/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gov-blue-100 dark:group-hover:bg-gov-blue-900 transition-colors">
        <IconComponent size={32} className="text-gov-blue-700 dark:text-gov-blue-400" />
      </div>
      <h3 className="text-xl font-bold text-gov-blue-900 dark:text-gray-100 mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      <div className="flex items-center text-gov-blue-700 dark:text-gov-blue-400 font-bold text-sm group-hover:translate-x-1 transition-transform">
        View Service Interface
        <Icons.ArrowRight size={16} className="ml-2" />
      </div>
    </Link>
  );
};

export default ServiceCard;
