import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';
import { IdCard } from 'lucide-react';

const LearnerLicense = () => {
  const fields = [
    { label: 'Full Name', placeholder: 'Enter your legal name' },
    { label: 'Parent/Guardian Name', placeholder: 'Guardian name' },
    { label: 'Educational Qualification', type: 'select', options: ['8th Pass', '10th Pass', 'Graduate', 'Post Graduate'] },
    { label: 'Blood Group', type: 'select', options: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'] },
  ];

  return (
    <ServicePlaceholder 
      title="Learner License" 
      description="Interface model for the initial learner license application process."
      icon={IdCard}
      fields={fields}
    />
  );
};

export default LearnerLicense;
