import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';
import { Copy } from 'lucide-react';

const DuplicateRC = () => {
  const fields = [
    { label: 'Registration Number', placeholder: 'e.g. [Registration Number Placeholder]' },
    { label: 'Chassis Number', placeholder: 'Enter last 5 digits' },
    { label: 'Reason for Duplicate', type: 'select', options: ['Lost Document', 'Theft', 'Torn/Mutilated'] },
    { label: 'Police Complaint (FIR) Date', type: 'date' },
    { label: 'FIR Number', placeholder: 'As mentioned in police report' }
  ];

  return (
    <ServicePlaceholder 
      title="Duplicate Registration Certificate" 
      description="Interface setup for requesting a replacement of a lost or damaged vehicle RC."
      icon={Copy}
      fields={fields}
    />
  );
};

export default DuplicateRC;
