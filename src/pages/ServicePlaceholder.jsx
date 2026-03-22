import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import PrototypeNotice from '../components/PrototypeNotice';
import { Info, AlertCircle, FileText, ArrowRight } from 'lucide-react';

/* 
  ServicePlaceholder represents a standardized interface model for unimplemented sub-services.
  It helps demonstrate navigation and interaction design throughout the portal.
*/

const ServicePlaceholder = ({ title, description, icon: Icon = FileText, fields = [] }) => {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom max-w-4xl">
        <Breadcrumb />
        
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gov-blue-100 text-gov-blue-700 rounded-xl flex items-center justify-center">
              <Icon size={28} />
            </div>
            <h1 className="text-3xl font-black text-gov-blue-900 tracking-tight">{title} Interface</h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl">{description}</p>
        </div>

        <PrototypeNotice />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="card bg-white p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-8 border-b pb-4">Digital Interaction Model</h2>
              
              {fields.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {fields.map((field, idx) => (
                    <div key={idx} className={field.fullWidth ? 'md:col-span-2' : ''}>
                      <label className="block text-sm font-bold text-gray-700 mb-2">{field.label}</label>
                      {field.type === 'select' ? (
                        <select className="form-input bg-white">
                          <option>Select {field.label}</option>
                          {field.options?.map((opt, i) => (
                            <option key={i}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input 
                          type={field.type || 'text'} 
                          className="form-input" 
                          placeholder={field.placeholder} 
                        />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 p-12 rounded-2xl text-center border border-dashed border-gray-200 mb-8">
                  <FileText className="mx-auto text-gray-300 mb-4" size={48} />
                  <p className="text-gray-500 font-medium italic">Specific form fields for this model have not been defined in the current prototype phase.</p>
                </div>
              )}

              <button className="btn-primary w-full flex items-center justify-center gap-2 py-4 opacity-70 cursor-not-allowed">
                Prototype interface simulation – Submission not connected <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card bg-orange-50 border-orange-100">
              <h3 className="font-bold text-orange-900 flex items-center gap-2 mb-4">
                <AlertCircle size={20} className="text-orange-600" />
                Regional Context
              </h3>
              <p className="text-sm text-orange-800 leading-relaxed">
                This page represents the digital interface for a <span className="font-bold">State {title}</span> service. All interactions are models for evaluation and do not process real government records.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-gov-blue-900 mb-4">Available Resources</h3>
              <ul className="space-y-3">
                {['User Manual', 'Document Checklist', 'Service Fees', 'FAQs'].map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center gap-2 hover:text-gov-blue-700 cursor-pointer transition-colors">
                    <div className="w-1.5 h-1.5 bg-gov-blue-400 rounded-full"></div>
                    {item}
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

export default ServicePlaceholder;
