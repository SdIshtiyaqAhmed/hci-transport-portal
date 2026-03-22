import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';
import { Calendar } from 'lucide-react';

const DrivingTestBooking = () => {
  const fields = [
    { label: 'Learner License Number', placeholder: 'e.g. [License Number Placeholder]' },
    { label: 'Regional Office', type: 'select', options: ['[Office Location 1]', '[Office Location 2]', '[Office Location 3]', '[Office Location 4]'] },
    { label: 'Preferred Date', type: 'date' },
    { label: 'Time Slot', type: 'select', options: ['09:00 AM - 11:00 AM', '11:00 AM - 01:00 PM', '02:00 PM - 04:00 PM'] },
  ];

  return (
    <ServicePlaceholder 
      title="Driving Test Slot Booking" 
      description="Select and confirm appointments for your practical driving evaluation."
      icon={Calendar}
      fields={fields}
    />
  );
};

export default DrivingTestBooking;
