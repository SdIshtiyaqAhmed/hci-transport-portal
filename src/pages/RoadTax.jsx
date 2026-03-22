import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';
import { CreditCard } from 'lucide-react';

const RoadTax = () => {
  const fields = [
    { label: 'Vehicle Number', placeholder: 'e.g. [Registration Number Placeholder]' },
    { label: 'Tax Tenure', type: 'select', options: ['1 Year', '2 Years', '5 Years', 'Lifetime'] },
    { label: 'Calculated Tax Amount', placeholder: 'System generated amount' },
    { label: 'Transaction Method', type: 'select', options: ['Digital Wallet', 'Net Banking', 'Credit/Debit Card'] }
  ];

  return (
    <ServicePlaceholder 
      title="Road Tax Payment" 
      description="Interface for paying annual or lifetime road taxes for registered vehicles."
      icon={CreditCard}
      fields={fields}
    />
  );
};

export default RoadTax;
