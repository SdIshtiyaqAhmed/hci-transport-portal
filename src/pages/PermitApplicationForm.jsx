import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import PrototypeNotice from '../components/PrototypeNotice';
import { FileText, ClipboardList, Map, Clock, CheckCircle, ChevronRight } from 'lucide-react';
import { saveApplication } from '../utils/simulation';

/* 
  PermitApplicationForm represents the interface design for transport permit applications.
  This is a conceptual mockup included for demonstration purposes only.
  Form submission is simulated using localStorage.
*/

const PermitApplicationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [appData, setAppData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const saved = saveApplication(data, 'Transport Permit');
    setAppData(saved);
    setSubmitted(true);
  };

  if (submitted && appData) {
    return (
      <div className="py-12 bg-gray-50 min-h-screen">
        <div className="container-custom max-w-2xl text-center pt-20">
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-3xl font-black text-gov-blue-900 mb-4">Permit Application Recorded</h2>
            <div className="bg-gov-blue-50 px-6 py-4 rounded-xl mb-6 border border-gov-blue-100">
              <p className="text-sm text-gov-blue-700 font-bold uppercase tracking-widest mb-1">Application ID</p>
              <p className="text-2xl font-mono font-black text-gov-blue-900">{appData.id}</p>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Your permit application has been successfully logged for demonstration.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="btn-secondary"
            >
              Return to Interface Model
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom max-w-4xl">
        <Breadcrumb />
        
        <div className="mb-10">
          <h1 className="text-3xl font-black text-gov-blue-900 mb-4 tracking-tight">Transport Permit Interface Model</h1>
          <p className="text-gray-600">Form structure for commercial goods and passenger transport permit applications.</p>
        </div>

        <PrototypeNotice />

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Permit Category */}
          <div className="card bg-white p-8">
            <h2 className="text-xl font-bold text-gov-blue-900 mb-6 flex items-center gap-2">
              <ClipboardList size={20} className="text-gov-blue-600" />
              Permit Selection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-4 uppercase tracking-widest text-[10px]">Select Permit Type</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'all-india', title: 'All India Tourist Permit', price: '₹45,000/Year' },
                    { id: 'national-goods', title: 'National Goods Permit', price: '₹80,000/Year' },
                    { id: 'regional-stage', title: 'Regional Stage Carriage', price: '₹32,000/Year' },
                    { id: 'contract-carriage', title: 'Contract Carriage Permit', price: '₹28,000/Year' },
                  ].map((type) => (
                    <label key={type.id} className="relative flex flex-col p-4 border border-gray-100 rounded-xl cursor-pointer hover:border-gov-blue-300 hover:bg-gov-blue-50 transition-all group">
                      <input type="radio" name="permit-type" className="absolute top-4 right-4 text-gov-blue-600 focus:ring-gov-blue-500" />
                      <span className="font-bold text-gray-900 mb-1">{type.title}</span>
                      <span className="text-xs text-gov-blue-700 font-black">{type.price}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Operation Details */}
          <div className="card bg-white p-8">
            <h2 className="text-xl font-bold text-gov-blue-900 mb-6 flex items-center gap-2">
              <Map size={20} className="text-gov-blue-600" />
              Operational Territory
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Primary Operation State</label>
                  <select className="form-input bg-white">
                    <option>[State A] (National Capital Region)</option>
                    <option>[State B]</option>
                    <option>[State C]</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Permit Duration</label>
                  <select className="form-input bg-white">
                    <option>1 Year (Standard)</option>
                    <option>5 Years (Provisional)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Additional Route Details (Optional)</label>
                <textarea className="form-input h-24" placeholder="Specify specific routes or boundary exceptions if applicable"></textarea>
              </div>
            </div>
          </div>

          {/* Section 3: Professional Documentation */}
          <div className="card bg-white p-8">
            <h2 className="text-xl font-bold text-gov-blue-900 mb-6 flex items-center gap-2">
              <FileText size={20} className="text-gov-blue-600" />
              Professional Proofs
            </h2>
            <div className="space-y-4">
              {[
                { name: 'Vehicle Fitness Certificate', icon: CheckCircle },
                { name: 'Pollution Under Control (PUC)', icon: CheckCircle },
                { name: 'Tax Clearance Certificate', icon: CheckCircle },
                { name: 'Address Proof of Business Head', icon: CheckCircle },
              ].map((doc, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 bg-gov-blue-50 rounded flex items-center justify-center text-gov-blue-600">
                    <doc.icon size={20} />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-sm font-bold text-gray-900">{doc.name}</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Requires PDF Upload</p>
                  </div>
                  <button type="button" className="p-2 text-gov-blue-700 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gov-blue-100">
                    <ChevronRight size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-2 text-gray-400">
              <Clock size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Est. Interface Review: 2 Mins</span>
            </div>
            <button type="submit" className="btn-primary px-16 py-4">
              Apply for Permit Model
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PermitApplicationForm;
