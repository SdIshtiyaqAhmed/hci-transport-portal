import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { HelpCircle, Search, MessageSquare, Phone, Mail, ChevronDown, ChevronUp, FileText, PlayCircle } from 'lucide-react';

const HelpCenter = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { 
      q: "How do I apply for a new Learner's License?", 
      a: "You can apply by visiting the 'Driving License' section, filling out Form 9, and uploading your age and address proofs. Once submitted, you'll need to book a slot for the online test." 
    },
    { 
      q: "What is the processing time for Vehicle Registration?", 
      a: "Standard registration takes 7-10 working days after successful physical inspection of the vehicle at the RTO." 
    },
    { 
      q: "Can I pay my road tax from another state?", 
      a: "Yes, our online portal allows you to pay taxes for any registered vehicle nationwide using your vehicle or application number." 
    },
    { 
      q: "What should I do if my payment fails but money is deducted?", 
      a: "Please wait for 24 hours for the system to reconcile. If the status doesn't update, contact our support with your transaction ID." 
    },
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <Breadcrumb />
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-gov-blue-900 mb-6">How can we help you today?</h1>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search help articles..." 
              className="w-full pl-12 pr-4 py-4 border border-gray-100 rounded-2xl shadow-sm focus:ring-4 focus:ring-gov-blue-50 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="card text-center p-8 bg-white hover:border-gov-blue-300 transition-all cursor-pointer group">
            <div className="w-16 h-16 bg-gov-blue-50 rounded-full flex items-center justify-center text-gov-blue-700 mx-auto mb-6 group-hover:bg-gov-blue-700 group-hover:text-white transition-colors">
              <MessageSquare size={32} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-sm text-gray-500 mb-4">Quick responses for basic queries.</p>
            <span className="text-gov-blue-700 font-bold text-sm">Start Chat</span>
          </div>

          <div className="card text-center p-8 bg-white hover:border-gov-blue-300 transition-all cursor-pointer group border-b-4 border-b-gov-blue-600">
            <div className="w-16 h-16 bg-gov-blue-50 rounded-full flex items-center justify-center text-gov-blue-700 mx-auto mb-6 group-hover:bg-gov-blue-700 group-hover:text-white transition-colors">
              <Phone size={32} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Help Desk</h3>
            <p className="text-sm text-gray-500 mb-4">Available 9 AM - 6 PM Mon-Sat.</p>
            <span className="text-gov-blue-700 font-bold text-sm">Phone: [Contact Number Placeholder]</span>
          </div>

          <div className="card text-center p-8 bg-white hover:border-gov-blue-300 transition-all cursor-pointer group">
            <div className="w-16 h-16 bg-gov-blue-50 rounded-full flex items-center justify-center text-gov-blue-700 mx-auto mb-6 group-hover:bg-gov-blue-700 group-hover:text-white transition-colors">
              <Mail size={32} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Email Support</h3>
            <p className="text-sm text-gray-500 mb-4">Detailed technical assistance.</p>
            <span className="text-gov-blue-700 font-bold text-sm text-xs break-all">[Support Email Placeholder]</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gov-blue-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-gray-900">{faq.q}</span>
                    {openFaq === i ? <ChevronUp size={20} className="text-gov-blue-600" /> : <ChevronDown size={20} className="text-gray-400" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed animate-in slide-in-from-top-1 duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileText size={20} className="text-gov-blue-600" />
                Resources & Guides
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'New User Onboarding', duration: '5 min' },
                  { title: 'Digital Payment Guide', duration: '3 min' },
                  { title: 'License Test Prep', duration: '12 min' },
                ].map((guide, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 hover:bg-gov-blue-50 rounded-lg cursor-pointer transition-colors group">
                    <div className="shrink-0 text-gov-blue-600 group-hover:text-gov-blue-700">
                      <PlayCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 leading-tight">{guide.title}</h4>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{guide.duration} Read</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gov-blue-900 to-black p-8 rounded-2xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Still Stuck?</h3>
                <p className="text-sm text-gov-blue-100 mb-6 opacity-80 leading-relaxed">Submit a ticket and our team will get back to you within 24 business hours.</p>
                <button className="bg-white text-gov-blue-900 px-6 py-3 rounded-xl text-sm font-bold hover:bg-gov-blue-50 transition-colors">
                  Submit Ticket
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

export default HelpCenter;
