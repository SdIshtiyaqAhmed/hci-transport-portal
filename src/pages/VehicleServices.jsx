import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { services } from '../data/services';
import { Car, ArrowRight, Shield, Calendar, MapPin } from 'lucide-react';

const VehicleServices = () => {
  const serviceData = services.find(s => s.id === 'vehicle-services');

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <Breadcrumb />
        
        <div className="mb-12">
          <h1 className="text-4xl font-black text-gov-blue-900 mb-4">Vehicle Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Register your new vehicle, transfer ownership, or apply for duplicate documents easily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serviceData.items.map((item) => (
            <Link key={item.id} to={item.path} className="card group hover:border-gov-blue-300 transition-all cursor-pointer bg-white">
              <div className="w-12 h-12 bg-gov-blue-50 rounded-lg flex items-center justify-center text-gov-blue-700 group-hover:bg-gov-blue-600 group-hover:text-white transition-colors mb-6">
                <Car size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 leading-tight">{item.title}</h3>
              <p className="text-xs text-gray-500 mb-4">Estimated time: 7-10 days</p>
              <div className="flex items-center gap-1 text-gov-blue-700 text-sm font-bold group-hover:gap-2 transition-all">
                Select Service Interface <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card border-l-4 border-l-gov-blue-600">
            <h2 className="text-xl font-bold text-gov-blue-900 mb-6 flex items-center gap-2">
              <Shield size={22} />
              Vehicle Security & Compliance
            </h2>
            <div className="space-y-6">
              {[
                { icon: Shield, title: 'Ownership Verification', text: 'All ownership transfers require Aadhaar-based digital signature.' },
                { icon: MapPin, title: 'Regional Office Integration', text: 'Documents are processed based on your current residential jurisdiction.' },
                { icon: Calendar, title: 'Slot Management', text: 'Physical inspections (if required) can be scheduled online.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 text-gov-blue-600">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-gov-blue-900 mb-4">Track Your Vehicle Application</h2>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Enter your Chassis Number or Application Reference Number to get the real-time status of your vehicle-related requests.
            </p>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Reference Number..." 
                className="flex-grow px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gov-blue-200"
              />
              <Link to="/status-lookup" className="bg-gov-blue-700 text-white px-6 py-2 rounded-lg font-bold hover:bg-gov-blue-800 transition-colors flex items-center justify-center">
                Track
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleServices;
