import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { news } from '../data/services';
import { Calendar, ArrowRight, Share2, Filter } from 'lucide-react';

const News = () => {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <Breadcrumb />
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black text-gov-blue-900 mb-4">News & Announcements</h1>
            <p className="text-xl text-gray-600">
              Explore interface models representing transport department initiatives and events within this academic framework.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:border-gov-blue-200 transition-colors">
              <Filter size={18} /> Filter by Category
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main News List */}
          <div className="lg:col-span-2 space-y-10">
            {news.map((item) => (
              <article key={item.id} className="card bg-white p-0 overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-grow p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gov-blue-700 bg-gov-blue-50 px-2 py-1 rounded">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400 font-bold">
                        <Calendar size={14} /> {item.date}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gov-blue-700 transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {item.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-1 text-gov-blue-700 font-bold hover:gap-2 transition-all">
                        View Article Model <ArrowRight size={18} />
                      </button>
                      <button className="text-gray-400 hover:text-gov-blue-600" title="Share">
                        <Share2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
            
            <button className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl font-bold text-gray-400 hover:bg-white hover:border-gov-blue-200 hover:text-gov-blue-700 transition-all">
              Load Older Articles
            </button>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-6 border-b pb-4">Press Releases</h3>
              <div className="space-y-6">
                {[
                  { title: 'Mandatory HSRP Integration with Regional VAHAN Database', date: 'Mar 12, 2026' },
                  { title: 'New Subsidies for Commercial Electric 3-Wheelers in [Main City]', date: 'Mar 08, 2026' },
                  { title: 'Introduction of Contactless Licensing at [Regional Office]', date: 'Mar 01, 2026' },
                ].map((pr, i) => (
                  <div key={i} className="group cursor-pointer">
                    <p className="text-[10px] font-black text-gov-blue-600 uppercase tracking-widest mb-1">{pr.date}</p>
                    <h4 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-gov-blue-700 transition-colors">
                      {pr.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="card bg-gov-blue-900 text-white">
              <h3 className="font-bold mb-4">Media Inquiries</h3>
              <p className="text-xs text-gov-blue-100 mb-6 leading-relaxed opacity-80">
                For press contacts and media kits, please contact the [State] Transport Public Relations office.
              </p>
              <p className="text-sm font-bold mb-6">pr-transport@example.com</p>
              <button className="w-full py-3 bg-white text-gov-blue-900 rounded-xl text-xs font-bold hover:bg-gov-blue-50 transition-colors uppercase tracking-widest">
                Media Kit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
