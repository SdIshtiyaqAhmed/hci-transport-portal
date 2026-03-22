import React, { useState, useRef } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import PrototypeNotice from '../components/PrototypeNotice';
import { Search, Hash, Calendar, ArrowRight, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { findApplicationById } from '../utils/simulation';

/* 
  StatusLookupForm represents the interface design for looking up application status.
  This is a conceptual mockup included for demonstration purposes only.
  Status results are retrieved from localStorage.
*/

const StatusLookupForm = () => {
  const [searching, setSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [appResult, setAppResult] = useState(null);
  const [error, setError] = useState('');
  const inputRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    setError('');
    const id = inputRef.current.value;
    setSearching(true);
    
    // Simulate lookup time
    setTimeout(() => {
      const result = findApplicationById(id);
      setSearching(false);
      if (result) {
        setAppResult(result);
        setShowResult(true);
      } else {
        setError('Application ID not found in simulation database.');
        setShowResult(false);
      }
    }, 1000);
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom max-w-4xl">
        <Breadcrumb />
        
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-black text-gov-blue-900 mb-4 tracking-tight">Application Status Interface</h1>
          <p className="text-gray-600 max-w-xl mx-auto">Interface model for real-time tracking of license and registration interactions.</p>
        </div>

        <PrototypeNotice />

        <div className="max-w-2xl mx-auto">
          <div className="card bg-white p-8 md:p-12 shadow-md">
            <h2 className="text-xl font-bold text-gov-blue-900 mb-8 border-b pb-4 flex items-center gap-2">
              <Search size={22} className="text-gov-blue-600" />
              Status Tracking Search
            </h2>
            
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Application ID / Token</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      ref={inputRef}
                      className="form-input pl-10 upperCase" 
                      placeholder="e.g. APP-A1B2C3" 
                      required
                    />
                    <Hash className="absolute left-3 top-2.5 text-gray-400" size={18} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Registration Category</label>
                  <select className="form-input bg-white">
                    <option>All Services</option>
                    <option>Driving License</option>
                    <option>Vehicle Registration</option>
                    <option>Transport Permit</option>
                    <option>Tax Payment</option>
                  </select>
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm font-bold animate-pulse">{error}</p>
              )}

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={searching}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-4 h-14"
                >
                  {searching ? (
                    <div className="flex items-center gap-2 text-white">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Simulating Lookup...</span>
                    </div>
                  ) : (
                    <>
                      Track Application State <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {showResult && appResult && (
            <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="card bg-white border-l-4 border-l-gov-blue-600 p-8 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gov-blue-600 mb-1">Local Database Result</h3>
                    <h2 className="text-2xl font-bold text-gov-blue-900">{appResult.service}</h2>
                    <p className="text-sm text-gray-500 mt-0.5 font-mono">ID: {appResult.id} • Applied on: {appResult.date}</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                    <Clock size={16} />
                    {appResult.status}
                  </div>
                </div>

                {/* Tracking Progress Mockup */}
                <div className="relative pt-8 pb-4">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-100 ml-[-1px]"></div>
                  
                  <div className="space-y-12">
                    {appResult.history.map((h, i) => (
                      <div key={i} className="relative flex gap-8 pl-10 items-center">
                        <div className="absolute left-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white ring-8 ring-white">
                          <CheckCircle size={18} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{h.status}</h4>
                          <p className="text-sm text-gray-500 font-medium">{h.date} • {h.note}</p>
                        </div>
                      </div>
                    ))}

                    <div className="relative flex gap-8 pl-10 items-center">
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-gov-blue-200 flex items-center justify-center text-gov-blue-700 ring-8 ring-white animate-pulse">
                        <Clock size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gov-blue-900">Awaiting Verification</h4>
                        <p className="text-sm text-gray-500 font-medium italic">Your application is in the simulation queue.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
                  <button 
                    onClick={() => setShowResult(false)}
                    className="text-gray-400 hover:text-gov-blue-700 font-bold text-xs uppercase tracking-widest transition-colors"
                  >
                    Clear Simulation
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusLookupForm;
