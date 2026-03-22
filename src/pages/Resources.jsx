import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { Download, FileText, Info, ExternalLink, ShieldCheck, Scale } from 'lucide-react';

const Resources = () => {
  const downloads = [
    { name: 'Form 1: Application for Driving License', type: 'PDF', size: '1.2 MB', category: 'Forms' },
    { name: 'Form 20: Application for Registration', type: 'PDF', size: '1.5 MB', category: 'Forms' },
    { name: 'Motor Vehicles Act (Amendment) 2019', type: 'PDF', size: '4.8 MB', category: 'Regulations' },
    { name: 'Revised Road Tax Schedule 2026', type: 'PDF', size: '2.1 MB', category: 'Policies' },
    { name: 'Guidelines for Goods Transport', type: 'PDF', size: '3.4 MB', category: 'Regulations' },
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <Breadcrumb />
        
        <div className="mb-12">
          <h1 className="text-4xl font-black text-gov-blue-900 mb-4">Resources & Downloads</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Access forms and documents representing transport regulations and policy structures within this interface model.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="card bg-white p-0 overflow-hidden mb-12">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h2 className="font-bold text-gov-blue-900 flex items-center gap-2">
                  <Download size={20} className="text-gov-blue-600" />
                  Service Documentation Mockups
                </h2>
                <div className="flex gap-2">
                  <button className="text-xs px-3 py-1 bg-white border border-gray-200 rounded-full font-bold text-gray-500 hover:bg-gov-blue-50 transition-colors">All</button>
                  <button className="text-xs px-3 py-1 bg-white border border-gray-200 rounded-full font-bold text-gray-500 hover:bg-gov-blue-50 transition-colors">Forms</button>
                  <button className="text-xs px-3 py-1 bg-white border border-gray-200 rounded-full font-bold text-gray-500 hover:bg-gov-blue-50 transition-colors">Policy</button>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {downloads.map((doc, i) => (
                  <div key={i} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="bg-gov-blue-50 p-3 rounded-lg text-gov-blue-700">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm md:text-base">{doc.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-gov-blue-600 bg-gov-blue-50 px-2 py-0.5 rounded">
                            {doc.category}
                          </span>
                          <span className="text-[10px] text-gray-400 font-bold">{doc.type} • {doc.size}</span>
                        </div>
                      </div>
                    </div>
                    <button className="btn-secondary !px-4 !py-2 !text-xs flex items-center gap-2">
                      Download <Download size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card bg-gov-blue-50 border-gov-blue-100">
                <h3 className="font-bold text-gov-blue-900 flex items-center gap-2 mb-4">
                  <Scale size={20} className="text-gov-blue-600" />
                  Key Regulations
                </h3>
                <ul className="space-y-4">
                  {[
                    'Central Motor Vehicles Rules 1989',
                    'National Green Tribunal Directives',
                    'Road Safety Policy 2025'
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700 group cursor-pointer hover:text-gov-blue-700 font-medium">
                      <ExternalLink size={14} className="mt-1 text-gray-400 group-hover:text-gov-blue-600" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card border-l-4 border-l-green-600">
                <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-4">
                  <ShieldCheck size={20} className="text-green-600" />
                  Citizen Charter
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Our commitment to providing timely, transparent, and accountable transport services. Learn about your rights and our service delivery standards.
                </p>
                <button className="text-sm text-gov-blue-700 font-bold hover:underline">View Citizen Charter</button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Info size={20} className="text-gov-blue-600" />
                Latest Updates
              </h3>
              <div className="space-y-6">
                {[
                  { date: 'Mar 10', title: 'New Permit Fees Effective Apr 1', tag: 'Updated' },
                  { date: 'Feb 25', title: 'Form 20 A/B Merged into Single Form', tag: 'New' },
                  { date: 'Feb 15', title: 'Digital Signature Guidelines v2.0', tag: 'Policy' }
                ].map((update, i) => (
                  <div key={i} className="relative pl-6 pb-6 border-l border-gray-100 last:border-0 last:pb-0">
                    <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-gov-blue-600"></div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">{update.date}</p>
                    <h4 className="font-bold text-sm text-gray-900 mb-1 leading-tight">{update.title}</h4>
                    <span className="text-[9px] font-black text-gov-blue-600 border border-gov-blue-100 px-1.5 py-0.5 rounded">{update.tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card bg-gray-900 text-white">
              <h3 className="font-bold mb-4">Missing a document?</h3>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                If you cannot find a specific form or regulation document, please use our request system.
              </p>
              <button className="w-full py-2 bg-gov-blue-700 text-white rounded-lg text-xs font-bold hover:bg-gov-blue-800 transition-colors">
                Request Document
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
