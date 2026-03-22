import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import DashboardCard from '../components/DashboardCard';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Download, 
  Search,
  ExternalLink,
  History,
  CreditCard,
  HelpCircle
} from 'lucide-react';
import { getApplications, getPayments } from '../utils/simulation';

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    setApplications(getApplications());
    setPayments(getPayments());
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-700';
      case 'Submitted': return 'bg-blue-100 text-blue-700';
      case 'Under Review': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const documents = [
    { name: 'Driving License (DigiLocker)', type: 'PDF', size: '1.2 MB' },
    { name: 'Vehicle Registration (RC)', type: 'PDF', size: '0.8 MB' },
    { name: 'Insurance Certificate', type: 'PDF', size: '1.5 MB' },
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="container-custom">
        <Breadcrumb />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black text-gov-blue-900 dark:text-gray-100">User Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400 font-medium">Welcome back, [Applicant Name Placeholder]. Monitor interface models for applications and documents.</p>
          </div>
          <button className="btn-primary flex items-center gap-2 hover:scale-105 transition-transform">
            New Application <ExternalLink size={18} />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <DashboardCard title="Active Applications" value={applications.filter(a => a.status !== 'Approved').length.toString()} icon={Clock} color="blue" />
          <DashboardCard title="Approved Models" value={applications.filter(a => a.status === 'Approved').length.toString()} icon={CheckCircle} color="green" />
          <DashboardCard title="Transactions" value={payments.length.toString()} icon={CreditCard} color="orange" />
          <DashboardCard title="Alerts/Notifications" value="2" icon={AlertCircle} color="purple" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Applications Table */}
          <div className="lg:col-span-2 card p-0 overflow-hidden bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 transition-colors">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
              <h2 className="font-bold text-gov-blue-900 dark:text-gray-100 flex items-center gap-2">
                <History size={20} className="text-gov-blue-600 dark:text-gov-blue-400" />
                Recent Applications
              </h2>
              <button className="text-sm text-gov-blue-700 dark:text-gov-blue-400 font-bold hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider font-bold">
                    <th className="px-6 py-4">App ID</th>
                    <th className="px-6 py-4">Service</th>
                    <th className="px-6 py-4">Submission Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4 font-mono text-sm text-gray-600 dark:text-gray-400">{app.id}</td>
                      <td className="px-6 py-4 font-bold text-gray-900 dark:text-gray-100">{app.service}</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{app.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-tight ${getStatusStyle(app.status)}`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gov-blue-700 dark:text-gov-blue-400 hover:text-gov-blue-900">
                        <button className="hover:scale-125 transition-transform"><Search size={18} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {applications.length === 0 && (
              <div className="p-12 text-center text-gray-400 dark:text-gray-600">
                <div className="bg-gray-50 dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-gray-300 dark:text-gray-700" size={32} />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100">No active applications</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">You haven't submitted any applications recently.</p>
              </div>
            )}
          </div>

          {/* Documents Sidebar */}
          <div className="space-y-6">
            <div className="card bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 transition-colors">
              <h2 className="font-bold text-gov-blue-900 dark:text-gray-100 flex items-center gap-2 mb-6">
                <FileText size={20} className="text-gov-blue-600 dark:text-gov-blue-400" />
                Saved Documents
              </h2>
              <div className="space-y-4">
                {documents.map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gov-blue-200 dark:hover:border-gov-blue-700 transition-colors bg-gray-50/50 dark:bg-gray-800/30">
                    <div className="flex items-center gap-3">
                      <div className="bg-white dark:bg-gray-800 p-2 rounded shadow-sm border border-gray-100 dark:border-gray-700">
                        <FileText size={20} className="text-gov-blue-700 dark:text-gov-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-gray-100 truncate max-w-[120px]">{doc.name}</p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase">{doc.type} • {doc.size}</p>
                      </div>
                    </div>
                    <button className="text-gov-blue-700 dark:text-gov-blue-400 hover:text-gov-blue-900 dark:hover:text-gov-blue-200 transition-colors p-1" title="Download">
                      <Download size={18} />
                    </button>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-3 text-xs font-black uppercase tracking-widest text-gov-blue-700 dark:text-gov-blue-400 border-2 border-dashed border-gov-blue-200 dark:border-gov-blue-900 rounded-xl hover:bg-gov-blue-50 dark:hover:bg-gov-blue-900/30 transition-colors">
                + Upload New Document
              </button>
            </div>

            <div className="card bg-gradient-to-br from-gov-blue-900 to-black text-white overflow-hidden relative border-none">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Need Support?</h3>
                <p className="text-xs text-gov-blue-100 mb-6 leading-relaxed opacity-80">Our support agents are available to help you with your applications.</p>
                <button className="bg-white text-gov-blue-900 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-tight hover:bg-gov-blue-50 transition-colors">
                  Contact Support
                </button>
              </div>
              <HelpCircle size={100} className="absolute -bottom-8 -right-8 text-gov-blue-800 opacity-30 z-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
