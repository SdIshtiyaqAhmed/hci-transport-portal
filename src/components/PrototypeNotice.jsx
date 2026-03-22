import React from 'react';
import { AlertTriangle } from 'lucide-react';

const PrototypeNotice = () => {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-r-lg">
      <div className="flex items-center gap-3">
        <AlertTriangle className="text-amber-500 shrink-0" size={20} />
        <div>
          <p className="text-sm font-bold text-amber-800">
            Prototype Interface Notice
          </p>
          <p className="text-xs text-amber-700 mt-0.5">
            This project demonstrates a conceptual redesign. Form submission and backend processing are not implemented.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrototypeNotice;
