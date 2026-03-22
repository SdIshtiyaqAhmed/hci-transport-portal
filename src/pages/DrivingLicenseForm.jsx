import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import PrototypeNotice from '../components/PrototypeNotice';
import { User, MapPin, Calendar, FileUp, CheckCircle } from 'lucide-react';
import { saveApplication } from '../utils/simulation';

/* 
  DrivingLicenseForm represents the interface design for a license application.
  This is a conceptual mockup included for demonstration purposes only.
  Form submission is simulated using localStorage.
*/

const DrivingLicenseForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [appData, setAppData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const saved = saveApplication(data, 'Driving License');
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
            <h2 className="text-3xl font-black text-gov-blue-900 mb-4">Application Submitted</h2>
            <div className="bg-gov-blue-50 px-6 py-4 rounded-xl mb-6 border border-gov-blue-100">
              <p className="text-sm text-gov-blue-700 font-bold uppercase tracking-widest mb-1">Application ID</p>
              <p className="text-2xl font-mono font-black text-gov-blue-900">{appData.id}</p>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Your application has been stored locally in the simulation environment. 
              You can track its status using the ID above.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="btn-secondary"
            >
              Return to Form Mockup
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
          <h1 className="text-3xl font-black text-gov-blue-900 mb-4 tracking-tight">Driving License Application Model</h1>
          <p className="text-gray-600">Interface mockup for new learner and permanent license applications.</p>
        </div>

        <PrototypeNotice />

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Personal Details */}
          <div className="card p-8">
            <h2 className="text-xl font-bold text-gov-blue-900 dark:text-gray-100 mb-6 flex items-center gap-2">
              <User size={20} className="text-gov-blue-600 dark:text-gov-blue-400" />
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Full Name (as per ID)</label>
                <input type="text" className="form-input" placeholder="Enter your full name" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Date of Birth</label>
                <div className="relative">
                  <input type="date" className="form-input pl-10" required />
                  <Calendar className="absolute left-3 top-2.5 text-gray-400" size={18} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Gender</label>
                <select className="form-input">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Blood Group</label>
                <select className="form-input">
                  <option>Select Blood Group</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Contact & Address */}
          <div className="card p-8">
            <h2 className="text-xl font-bold text-gov-blue-900 dark:text-gray-100 mb-6 flex items-center gap-2">
              <MapPin size={20} className="text-gov-blue-600 dark:text-gov-blue-400" />
              Address Details
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Residential Address</label>
                <textarea className="form-input h-24" placeholder="Enter your current residential address"></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">State</label>
                  <select className="form-input">
                    <option>Select State</option>
                    <option>[State A]</option>
                    <option>[State B]</option>
                    <option>[State C]</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">City/District</label>
                  <input type="text" className="form-input" placeholder="City" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Pincode</label>
                  <input type="text" className="form-input" placeholder="[000000]" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Document Upload */}
          <div className="card p-8">
            <h2 className="text-xl font-bold text-gov-blue-900 dark:text-gray-100 mb-6 flex items-center gap-2">
              <FileUp size={20} className="text-gov-blue-600 dark:text-gov-blue-400" />
              Required Documents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-2 border-dashed border-gray-100 dark:border-gray-800 rounded-xl p-6 text-center hover:border-gov-blue-200 dark:hover:border-gov-blue-700 transition-colors cursor-pointer group">
                <FileUp size={32} className="mx-auto text-gray-300 dark:text-gray-600 mb-3 group-hover:text-gov-blue-600 dark:group-hover:text-gov-blue-400 transition-colors" />
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-1">Proof of Age</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Aadhar, Passport, or Birth Certificate</p>
                <input type="file" className="hidden" />
              </div>
              <div className="border-2 border-dashed border-gray-100 dark:border-gray-800 rounded-xl p-6 text-center hover:border-gov-blue-200 dark:hover:border-gov-blue-700 transition-colors cursor-pointer group">
                <FileUp size={32} className="mx-auto text-gray-300 dark:text-gray-600 mb-3 group-hover:text-gov-blue-600 dark:group-hover:text-gov-blue-400 transition-colors" />
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-1">Proof of Residence</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Voter ID, Utility Bill, or Rental Agreement</p>
                <input type="file" className="hidden" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <p className="text-sm text-gray-400 italic">Interface submission is for demonstration only.</p>
            <button type="submit" className="btn-primary flex items-center gap-2 px-12 py-4">
              Submit Application Mockup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DrivingLicenseForm;
