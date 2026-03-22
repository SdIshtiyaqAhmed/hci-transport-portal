import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';
import { Search } from 'lucide-react';

const VehicleStatusLookup = () => {
  const fields = [
    { label: 'Registration Number', placeholder: 'e.g. [Registration Number Placeholder]' },
    { label: 'Chassis Number (Full)', placeholder: 'Required for full technical history' },
    { label: 'Verification Code (Captcha)', placeholder: 'ABCD-1234' }
  ];

  return (
    <ServicePlaceholder 
      title="Vehicle History & Status" 
      description="Interface for checking fitness, insurance validity, and technical specifications of a vehicle."
      icon={Search}
      fields={fields}
    />
  );
};

export default VehicleStatusLookup;
