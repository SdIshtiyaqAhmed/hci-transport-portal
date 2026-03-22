import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';
import { Users } from 'lucide-react';

const TransferOwnership = () => {
  const fields = [
    { label: 'Vehicle Registration Number', placeholder: 'e.g. [Registration Number Placeholder]' },
    { label: 'Buyer Full Name', placeholder: 'Name of the transferee' },
    { label: 'Sale Amount', placeholder: 'Price in local currency' },
    { label: 'Transfer Reason', type: 'select', options: ['Sale of Vehicle', 'Inheritance', 'Gift/Donation'] },
    { label: 'Buyer Address', placeholder: 'Full residential address' },
    { label: 'Sale Agreement Upload', type: 'text', placeholder: 'Link to digital copy' }
  ];

  return (
    <ServicePlaceholder 
      title="Transfer Ownership" 
      description="Interface model for transferring vehicle titles between registered owners."
      icon={Users}
      fields={fields}
    />
  );
};

export default TransferOwnership;
