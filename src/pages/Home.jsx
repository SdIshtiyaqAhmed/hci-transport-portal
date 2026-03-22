import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import SearchBar from '../components/SearchBar';
import { ArrowRight, CheckCircle, HelpCircle, FileText, Info } from 'lucide-react';

const Home = () => {
  return (
    <div className="pb-16 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gov-blue-50 dark:from-gray-950 dark:to-gov-blue-900/10 pt-16 pb-24 border-b border-gray-100 dark:border-gray-800 transition-all duration-300">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-gov-blue-100 dark:bg-gov-blue-900/50 text-gov-blue-700 dark:text-gov-blue-300 px-4 py-1.5 rounded-full text-sm font-bold mb-8 uppercase tracking-wider">
            <CheckCircle size={16} />
            State Transport Department Interface Redesign
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gov-blue-900 dark:text-gray-100 mb-6 tracking-tight leading-[1.1]">
            Digital Transport Services <br /> 
            <span className="text-gov-blue-600 dark:text-gov-blue-400">Conceptual Protocol.</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Redesigned interface for license applications, vehicle registration, and transport tax systems for an abstract government structure.
          </p>
          <SearchBar />
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 font-medium">
            <span className="flex items-center gap-2 font-bold"><CheckCircle size={16} className="text-green-500" /> Digital Interaction Model</span>
            <span className="flex items-center gap-2 font-bold"><CheckCircle size={16} className="text-green-500" /> Status Display Interface</span>
            <span className="flex items-center gap-2 font-bold"><CheckCircle size={16} className="text-green-500" /> Payment Flow Simulation</span>
          </div>
        </div>
      </section>

      {/* Quick Services Section */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-all duration-300">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="section-title mb-2 dark:text-white">Major Services</h2>
              <p className="text-gray-600 dark:text-gray-400">Quickly access our most requested transport services.</p>
            </div>
            <Link to="/services" className="text-gov-blue-700 dark:text-gov-blue-400 font-bold flex items-center gap-1 hover:underline">
              View all services <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Help Section Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800 transition-all duration-300">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gov-blue-900 dark:text-white mb-6 leading-tight">Need Assistance With <br /> Your Application?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Our help center provides comprehensive guides, walkthroughs, and support for all our digital services. We are here to help you every step of the way.
              </p>
              <div className="space-y-4">
                {[
                  { icon: HelpCircle, title: 'FAQs', desc: 'Find quick answers to common questions.' },
                  { icon: FileText, title: 'User Guides', desc: 'Step-by-step instructions for all services.' },
                  { icon: Info, title: 'Policies', desc: 'Understand the rules and regulations.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800/50 transition-colors cursor-pointer group">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-gov-blue-100 dark:bg-gov-blue-900/50 flex items-center justify-center text-gov-blue-700 dark:text-gov-blue-400 group-hover:bg-gov-blue-600 group-hover:text-white transition-colors">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gov-blue-900 dark:text-gray-100 leading-none mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/help-center" className="btn-primary inline-flex items-center gap-2 mt-8">
                Visit Help Center <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 relative z-10 transition-colors">
                <h3 className="text-2xl font-bold text-gov-blue-900 dark:text-gray-100 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {[
                    'How do I renew my driving license online?',
                    'What documents are needed for vehicle transfer?',
                    'How can I check my permit application status?',
                    'Where can I find regional office addresses?'
                  ].map((q, i) => (
                    <div key={i} className="pb-4 border-b border-gray-100 dark:border-gray-800 last:border-0 hover:text-gov-blue-700 dark:hover:text-gov-blue-400 cursor-pointer transition-colors flex justify-between items-center group">
                      <span className="font-bold text-gray-700 dark:text-gray-300">{q}</span>
                      <ArrowRight size={16} className="text-gray-300 dark:text-gray-600 group-hover:text-gov-blue-700 dark:group-hover:text-gov-blue-400" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gov-blue-200 dark:bg-gov-blue-700 rounded-full blur-[120px] opacity-20 dark:opacity-10 -z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
