import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';
import { Landmark } from 'lucide-react';

const ServiceFee = () => {
  const fields = [
    { label: 'Application ID', placeholder: 'e.g. APP-X9Y2Z' },
    { label: 'Service Category', type: 'select', options: ['License Fee', 'Registration Fee', 'Permit Surcharge'] },
    { label: 'Payment Receipt ID', placeholder: 'For verification' }
  ];

  return (
    <ServicePlaceholder 
      title="Service Fee Payment" 
      description="Interface for paying specific government surcharges and interaction fees."
      icon={Landmark}
      fields={fields}
    />
  );
};

export default ServiceFee;
