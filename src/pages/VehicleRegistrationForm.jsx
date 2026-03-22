import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import PrototypeNotice from '../components/PrototypeNotice';
import { Car, Tag, Wrench, FileText, CheckCircle, Info } from 'lucide-react';
import { saveApplication } from '../utils/simulation';

/* 
  VehicleRegistrationForm represents the interface design for a vehicle registration application.
  This is a conceptual mockup included for demonstration purposes only.
  Form submission is simulated using localStorage.
*/

const VehicleRegistrationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [appData, setAppData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const saved = saveApplication(data, 'Vehicle Registration');
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
            <h2 className="text-3xl font-black text-gov-blue-900 mb-4">Registration Request Logged</h2>
            <div className="bg-gov-blue-50 px-6 py-4 rounded-xl mb-6 border border-gov-blue-100">
              <p className="text-sm text-gov-blue-700 font-bold uppercase tracking-widest mb-1">Application ID</p>
              <p className="text-2xl font-mono font-black text-gov-blue-900">{appData.id}</p>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Your vehicle registration request has been stored in the prototype database (localStorage).
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="btn-secondary"
            >
              Back to Registration Model
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
          <h1 className="text-3xl font-black text-gov-blue-900 mb-4 tracking-tight">Vehicle Registration Interface Model</h1>
          <p className="text-gray-600">Structure for vehicle registration and ownership transfer interaction.</p>
        </div>

        <PrototypeNotice />

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Vehicle Technical Details */}
          <div className="card bg-white p-8">
            <h2 className="text-xl font-bold text-gov-blue-900 mb-6 flex items-center gap-2">
              <Car size={20} className="text-gov-blue-600" />
              Vehicle Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Chassis Number</label>
                <input type="text" className="form-input" placeholder="e.g. 1HGCM82633A03498" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Engine Number</label>
                <input type="text" className="form-input" placeholder="e.g. J35A8-1234567" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Vehicle Category</label>
                <select className="form-input bg-white">
                  <option>Select Category</option>
                  <option>L-Two Wheeler</option>
                  <option>M-Passenger Car</option>
                  <option>N-Goods Carrier</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Fuel Type</label>
                <select className="form-input bg-white">
                  <option>Select Fuel</option>
                  <option>Petrol</option>
                  <option>Diesel</option>
                  <option>Electric</option>
                  <option>CNG</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Purchase & Manufacturer Details */}
          <div className="card bg-white p-8">
            <h2 className="text-xl font-bold text-gov-blue-900 mb-6 flex items-center gap-2">
              <Tag size={20} className="text-gov-blue-600" />
              Manufacturer Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Make and Model</label>
                <input type="text" className="form-input" placeholder="e.g. Maruti Suzuki Swift" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Year of Manufacture</label>
                <input type="number" className="form-input" placeholder="2026" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Purchase Date</label>
                <input type="date" className="form-input bg-white" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Dealer Name</label>
                <input type="text" className="form-input" placeholder="Name of authorized dealership" />
              </div>
            </div>
          </div>

          {/* Section 3: Owner Documentation */}
          <div className="card bg-white p-8">
            <h2 className="text-xl font-bold text-gov-blue-900 mb-6 flex items-center gap-2">
              <FileText size={20} className="text-gov-blue-600" />
              Supporting Documentation Interface
            </h2>
            <div className="space-y-4">
              {[
                'Sales Certificate (Form 21)',
                'Road Worthiness Certificate (Form 22)',
                'Valid Insurance Certificate',
                'Custom Clearances (For Imported Vehicles)'
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-xl hover:bg-white hover:border-gov-blue-200 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-lg border border-gray-100 group-hover:text-gov-blue-600 transition-colors">
                      <FileText size={18} />
                    </div>
                    <span className="text-sm font-bold text-gray-700">{doc}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gov-blue-600 font-bold text-xs uppercase tracking-widest">
                    <span>Upload</span>
                    <Wrench size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gov-blue-50 p-6 rounded-2xl flex items-start gap-4">
            <Info className="text-gov-blue-600 shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-gov-blue-800 leading-relaxed">
              <span className="font-bold">Note:</span> A physical inspection of the vehicle may be required at the regional office after processing this digital interaction mockup.
            </p>
          </div>

          <div className="flex items-center justify-between pt-4">
            <button type="button" className="text-sm font-bold text-gray-400 hover:text-gray-600">Save Progress</button>
            <button type="submit" className="btn-primary px-16 py-4">
              Submit Registration Model
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleRegistrationForm;
