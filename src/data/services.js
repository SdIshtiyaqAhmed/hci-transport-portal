export const services = [
  {
    id: 'driving-license',
    title: 'Driving License',
    icon: 'IdCard',
    description: 'Apply for learner license, renew license, or check status.',
    path: '/services/driving-license',
    items: [
      { id: 'll', title: 'Apply for Learner License', path: '/services/driving-license/apply-ll' },
      { id: 'test', title: 'Book Driving Test Slot', path: '/services/driving-license/book-test' },
      { id: 'renew', title: 'Renew License', path: '/services/driving-license/renew' },
      { id: 'status', title: 'Check License Status', path: '/services/driving-license/status' },
    ]
  },
  {
    id: 'vehicle-services',
    title: 'Vehicle Services',
    icon: 'Car',
    description: 'Registration, owner transfer, duplicate RC, and vehicle status.',
    path: '/services/vehicle-services',
    items: [
      { id: 'reg', title: 'Vehicle Registration', path: '/services/vehicle-services/registration' },
      { id: 'transfer', title: 'Transfer Ownership', path: '/services/vehicle-services/transfer' },
      { id: 'rc', title: 'Duplicate RC', path: '/services/vehicle-services/duplicate-rc' },
      { id: 'v-status', title: 'Vehicle Status', path: '/services/vehicle-services/status' },
    ]
  },
  {
    id: 'permits',
    title: 'Permits',
    icon: 'FileText',
    description: 'Goods and passenger transport permit applications.',
    path: '/services/permits',
    items: [
      { id: 'goods', title: 'Goods Transport Permit', path: '/services/permits/goods' },
      { id: 'passenger', title: 'Passenger Transport Permit', path: '/services/permits/passenger' },
    ]
  },
  {
    id: 'payments',
    title: 'Online Payments',
    icon: 'CreditCard',
    description: 'Pay road tax and other service fees online.',
    path: '/services/payments',
    items: [
      { id: 'tax', title: 'Road Tax Payment', path: '/services/payments/road-tax' },
      { id: 'fee', title: 'Service Fee Payment', path: '/services/payments/service-fee' },
    ]
  },
  {
    id: 'app-status',
    title: 'Application Status',
    icon: 'Search',
    description: 'Interface for tracking application progress.',
    path: '/status-lookup',
    items: []
  }
];

export const news = [
  {
    id: 1,
    title: 'Regional EV Subsidy Scheme Phase II Launched',
    date: '2026-03-10',
    summary: 'The State Government has expanded subsidies for electric three-wheelers and scooters across [Region Placeholder] and [Region Placeholder].',
    category: 'State News'
  },
  {
    id: 2,
    title: 'Mobile App Integration for Digital Licenses',
    date: '2026-03-05',
    summary: 'Digital driving licenses can now be accessed directly through the [App Name Placeholder] mobile application for citizens.',
    category: 'Digital Initiative'
  },
  {
    id: 3,
    title: 'Road Safety Workshop at [Office Location]',
    date: '2026-03-01',
    summary: 'A comprehensive road safety workshop for commercial drivers is scheduled at the [Regional Office Placeholder] next week.',
    category: 'Events'
  }
];

export const announcements = [
  "[Office Location Placeholder] maintenance scheduled for March 20th.",
  "New HSRP plate booking interface updated for registered vehicles.",
  "Driving test slots expanded for [Region Placeholder] and [Region Placeholder] offices."
];
