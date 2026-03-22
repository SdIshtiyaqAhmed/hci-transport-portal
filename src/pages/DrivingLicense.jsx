import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { services } from '../data/services';
import { ArrowRight, IdCard, Info, CheckCircle, Clock } from 'lucide-react';

const DrivingLicense = () => {
  const serviceData = services.find(s => s.id === 'driving-license');

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <Breadcrumb />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 bg-gov-blue-100 text-gov-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase">
                Transport Services
              </div>
              <h1 className="text-4xl font-black text-gov-blue-900 mb-6 leading-tight">
                Driving License Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                This section demonstrates the digital interface model for applying for or renewing a driving license within a conceptual state framework. Interaction paths are provided below for evaluation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceData.items.map((item) => (
                <div key={item.id} className="card group hover:border-gov-blue-300 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gov-blue-50 rounded-lg flex items-center justify-center text-gov-blue-700 group-hover:bg-gov-blue-700 group-hover:text-white transition-colors">
                      <IdCard size={24} />
                    </div>
                    <ArrowRight size={20} className="text-gray-300 group-hover:text-gov-blue-700 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold text-gov-blue-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 truncate">Processing time: 3-5 working days</p>
                  <Link to={item.path} className="text-gov-blue-700 font-bold text-sm">View Application Interface</Link>
                </div>
              ))}
            </div>

            {/* Application Steps */}
            <div className="mt-16 bg-white p-8 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gov-blue-900 mb-8">How to Apply</h2>
              <div className="space-y-8">
                {[
                  { step: 1, title: 'Fill Online Form', desc: 'Complete the digital application form with your personal and health details.' },
                  { step: 2, title: 'Upload Documents', desc: 'Upload scanned copies of age proof, address proof, and medical certificate.' },
                  { step: 3, title: 'Observe Fee Interface', desc: 'Simulated payment path for service fees using digital interaction models.' },
                  { step: 4, title: 'Book Slot', desc: 'Select your preferred date and time for the driving test/biometrics.' }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-gov-blue-700 text-white flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card bg-gov-blue-50 border-gov-blue-100">
              <h3 className="font-bold text-gov-blue-900 flex items-center gap-2 mb-4">
                <Info size={20} className="text-gov-blue-600" />
                Required Documents
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-600" /> Proof of Age (Aadhar/Passport)</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-600" /> Proof of Address</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-600" /> Medical Certificate (Form 1A)</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-600" /> Recent Photographs (Digital)</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="font-bold text-gov-blue-900 mb-4">Service Status</h3>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-4">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-orange-500" />
                  <span className="text-sm font-medium">Average Wait Time</span>
                </div>
                <span className="font-bold text-sm">4 Days</span>
              </div>
              <p className="text-xs text-gray-500 leading-tight">
                Wait times may vary depending on the local regional office traffic.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gov-blue-800 to-gov-blue-900 p-6 rounded-2xl text-white">
              <h3 className="font-bold mb-2">Need Help?</h3>
              <p className="text-sm text-gov-blue-100 mb-4 opacity-80">Our dedicated support for licensing services is available from 9 AM to 6 PM.</p>
              <button className="w-full py-2 bg-white text-gov-blue-900 rounded-lg text-sm font-bold hover:bg-gov-blue-50 transition-colors">
                Call Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrivingLicense;
