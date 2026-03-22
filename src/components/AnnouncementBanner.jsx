import React, { useState, useEffect } from 'react';
import { announcements } from '../data/services';
import { AlertCircle, X } from 'lucide-react';

const AnnouncementBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gov-blue-900 text-white py-2 px-4 flex items-center justify-between text-sm sm:text-base">
      <div className="flex items-center gap-2 max-w-7xl mx-auto flex-grow justify-center">
        <AlertCircle size={18} className="text-gov-blue-100 shrink-0" />
        <p className="font-medium animate-pulse text-center truncate">
          {announcements[currentIndex]}
        </p>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="hover:bg-gov-blue-800 p-1 rounded-full transition-colors"
        aria-label="Close announcement"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default AnnouncementBanner;
