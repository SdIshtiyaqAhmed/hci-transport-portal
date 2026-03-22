import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';
import { Truck } from 'lucide-react';

const GoodsPermit = () => {
  const fields = [
    { label: 'Carrier Registration', placeholder: 'Registration Number' },
    { label: 'Permit Category', type: 'select', options: ['National Permit', 'State Permit', 'Zonal Permit'] },
    { label: 'Goods Type', type: 'select', options: ['General Cargo', 'Hazardous Materials', 'Perishable Items'] },
    { label: 'Validity Period', type: 'select', options: ['1 Year', '3 Years', '5 Years'] },
    { label: 'Business License Number', placeholder: 'Enter commercial license ID' }
  ];

  return (
    <ServicePlaceholder 
      title="Goods Transport Permit" 
      description="Interface model for commercial goods vehicle permit applications."
      icon={Truck}
      fields={fields}
    />
  );
};

export default GoodsPermit;
