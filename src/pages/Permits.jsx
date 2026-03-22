import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { FileText, Truck, Users, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

const Permits = () => {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <Breadcrumb />
        
        <div className="mb-12">
          <h1 className="text-4xl font-black text-gov-blue-900 mb-4">Transport Permits</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Issuing national and regional permits for goods and passenger vehicles. Ensure your commercial operations are legally compliant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="card hover:border-gov-blue-300 transition-all cursor-pointer bg-white group p-8">
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 bg-gov-blue-50 rounded-2xl flex items-center justify-center text-gov-blue-700 group-hover:bg-gov-blue-600 group-hover:text-white transition-colors">
                <Truck size={32} />
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-black px-3 py-1 rounded-full uppercase">Instant Renewal Available</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Goods Transport Permit</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Standard and National permits for heavy/medium goods vehicles. Valid for transport across state lines or specific regions.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <ShieldCheck size={16} className="text-gov-blue-600" /> Multi-state validity options
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <ShieldCheck size={16} className="text-gov-blue-600" /> Digital permit certificate (QR Coded)
              </div>
            </div>
            <Link to="/services/permits/goods" className="btn-primary w-full flex items-center justify-center gap-2">
              View Goods Permit Interface <ArrowRight size={20} />
            </Link>
          </div>

          <div className="card hover:border-gov-blue-300 transition-all cursor-pointer bg-white group p-8">
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 bg-gov-blue-50 rounded-2xl flex items-center justify-center text-gov-blue-700 group-hover:bg-gov-blue-600 group-hover:text-white transition-colors">
                <Users size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Passenger Transport Permit</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Permits for Stage Carriages, Contract Carriages, and Tourist vehicles. Necessary for public and private passenger transport services.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <ShieldCheck size={16} className="text-gov-blue-600" /> Route-specific authorizations
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <ShieldCheck size={16} className="text-gov-blue-600" /> Educational institution bus permits
              </div>
            </div>
            <Link to="/services/permits/passenger" className="btn-primary w-full flex items-center justify-center gap-2">
              View Passenger Permit Interface <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl flex gap-4">
          <AlertCircle className="text-orange-600 shrink-0" size={24} />
          <div>
            <h4 className="font-bold text-orange-900 mb-1">Important Compliance Notice</h4>
            <p className="text-sm text-orange-800 leading-relaxed">
              All permit applications require a valid Fitness Certificate and Insurance for the vehicle. Any pending e-Challans must be cleared before the permit can be issued or renewed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Permits;
