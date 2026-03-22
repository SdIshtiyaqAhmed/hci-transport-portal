import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Phone, Mail, MapPin, Facebook, Twitter, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Landmark size={24} className="text-gov-blue-100" />
              <span className="font-bold text-lg tracking-tight uppercase">State Transport Department</span>
            </div>
            <p className="text-sm leading-relaxed">
              Conceptual interface model for a Department of Transport. Focused on safe, efficient, and digital-first citizen services within an academic framework.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors" title="Prototype - Link not functional"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors" title="Prototype - Link not functional"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services/driving-license" className="hover:text-white transition-colors">Driving License</Link></li>
              <li><Link to="/services/vehicle-services" className="hover:text-white transition-colors">Vehicle Registration</Link></li>
              <li><Link to="/services/permits" className="hover:text-white transition-colors">Transport Permits</Link></li>
              <li><Link to="/services/payments" className="hover:text-white transition-colors">Online Payments</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6">Help & Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/help-center" className="hover:text-white transition-colors">Help Center / FAQ</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">User Guides</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Regional Offices</Link></li>
              <li><Link to="/help-center" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-gov-blue-400" />
                <span>[Transport Office Address Placeholder], [City], [State] - [Pincode]</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-gov-blue-400" />
                <span>Phone: [Contact Number Placeholder]</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-gov-blue-400" />
                <span>[Support Email Placeholder]</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© 2026 Department of Transport. All Rights Reserved.</p>
          <div className="flex gap-6 uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
          <div className="flex items-center gap-1 text-gov-blue-400">
            <ShieldCheck size={14} />
            <span>Secure Connection</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
