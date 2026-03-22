import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { Landmark, Users, MapPin, Briefcase, FileSearch, ArrowRight, ShieldCheck, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <Breadcrumb />
        
        <div className="mb-16">
          <h1 className="text-4xl font-black text-gov-blue-900 mb-6">About the Department</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Exploring the interface redesign of transport services to model safer and more structured digital interactions for citizen access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gov-blue-900 mb-6 flex items-center gap-2">
                <Landmark size={24} className="text-gov-blue-600" />
                Department Overview
              </h2>
              <div className="card bg-white p-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Established with the objective of exploring transport interface models, this project focuses on the interface structure for enforcing movement regulations and providing licensing services.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <div className="shrink-0 text-gov-blue-700"><ShieldCheck size={28} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Safety First</h4>
                      <p className="text-sm text-gray-500">Implementing strict safety standards for vehicles and drivers.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 text-gov-blue-700"><Globe size={28} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Digital Interface Models</h4>
                      <p className="text-sm text-gray-500">Mapping physical office interactions into digital interface structures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gov-blue-900 mb-6 flex items-center gap-2">
                <MapPin size={24} className="text-gov-blue-600" />
                Regional Presence
              </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Headquarters ([Office Location Placeholder])', 
                  'Zone I Regional Office ([City/Region Placeholder])', 
                  'Zone II Regional Office ([City/Region Placeholder])', 
                  'Zone III Regional Office ([City/Region Placeholder])'
                ].map((office, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-white border border-gray-100 rounded-xl hover:bg-gov-blue-50 transition-colors cursor-pointer group">
                    <span className="font-bold text-gray-700">{office}</span>
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-gov-blue-700" />
                  </div>
                ))}
              </div>
              <button className="mt-6 text-gov-blue-700 font-bold text-sm tracking-wide uppercase hover:underline">
                View all regional offices & RTOs
              </button>
            </section>
          </div>

          <div className="space-y-8">
            <div className="card border-t-4 border-t-gov-blue-700">
              <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Briefcase size={20} className="text-gov-blue-600" />
                Opportunities
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg hover:border-gov-blue-200 border border-transparent transition-all cursor-pointer">
                  <h4 className="font-bold text-sm text-gray-900">Careers</h4>
                  <p className="text-xs text-gray-500 mt-1">Join our team of technology and policy experts.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg hover:border-gov-blue-200 border border-transparent transition-all cursor-pointer">
                  <h4 className="font-bold text-sm text-gray-900">Tenders & Contracts</h4>
                  <p className="text-xs text-gray-500 mt-1">Active procurement opportunities for businesses.</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileSearch size={20} className="text-gov-blue-600" />
                Transparency
              </h3>
              <ul className="space-y-4">
                {['RTI Information', 'Annual Reports', 'Public Grievance', 'Vigilance'].map((item, i) => (
                  <li key={i} className="flex justify-between items-center text-sm font-medium text-gray-600 hover:text-gov-blue-700 cursor-pointer border-b border-gray-50 pb-2">
                    {item}
                    <ArrowRight size={14} className="text-gray-300" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
