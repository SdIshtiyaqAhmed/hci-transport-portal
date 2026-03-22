import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';
import { Users } from 'lucide-react';

const PassengerPermit = () => {
  const fields = [
    { label: 'Vehicle Number', placeholder: 'Bus/Taxi Registration' },
    { label: 'Seating Capacity', type: 'select', options: ['4-7 Seater', '8-20 Seater', '20+ Seater'] },
    { label: 'Route Type', type: 'select', options: ['Intra-City', 'Inter-City', 'Tourist/All India'] },
    { label: 'Fitness Certificate Date', type: 'date' }
  ];

  return (
    <ServicePlaceholder 
      title="Passenger Transport Permit" 
      description="Interface setup for commercial passenger transport and taxi permit requests."
      icon={Users}
      fields={fields}
    />
  );
};

export default PassengerPermit;
