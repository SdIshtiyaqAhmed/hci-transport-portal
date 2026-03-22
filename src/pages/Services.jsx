import React from 'react';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import Breadcrumb from '../components/Breadcrumb';

const Services = () => {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="container-custom">
        <Breadcrumb />
        
        <div className="mb-12">
          <h1 className="text-4xl font-black text-gov-blue-900 dark:text-gray-100 mb-4">All Digital Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl font-medium leading-relaxed">
            Explore our comprehensive range of transport department services, designed to be accessible and efficient for every citizen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        <div className="mt-20 card bg-white dark:bg-gray-900/50 p-10 border-l-8 border-l-gov-blue-600 dark:border-l-gov-blue-500 shadow-2xl shadow-gov-blue-900/10 dark:shadow-black/40">
          <h2 className="text-3xl font-black text-gov-blue-900 dark:text-gray-100 mb-4 text-center">Can't find what you're looking for?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-10 max-w-2xl mx-auto leading-relaxed">
            Our help center provides guides for all services. If you need specific assistance, our support team is available models.
          </p>
          <div className="flex justify-center">
            <button className="btn-primary hover:scale-105 transition-transform px-10 py-4 text-lg">Visit Help Center</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
