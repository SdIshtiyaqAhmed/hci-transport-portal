import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';
import { IdCard } from 'lucide-react';

const LicenseRenewal = () => {
  const fields = [
    { label: 'Current License Number', placeholder: 'e.g. [License Number Placeholder]' },
    { label: 'Expiry Date', type: 'date' },
    { label: 'Reason for Renewal', type: 'select', options: ['Regular Expiry', 'Damaged License', 'Change of Information'] },
    { label: 'Digital Signature Upload', placeholder: 'Upload signature file' },
  ];

  return (
    <ServicePlaceholder 
      title="Driving License Renewal" 
      description="Interface simulation for renewing existing permanent driving licenses."
      icon={IdCard}
      fields={fields}
    />
  );
};

export default LicenseRenewal;
