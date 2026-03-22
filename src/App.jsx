import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { AccessibilityProvider } from './context/AccessibilityContext.jsx';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home.jsx'));
const DrivingLicense = lazy(() => import('./pages/DrivingLicense.jsx'));
const VehicleServices = lazy(() => import('./pages/VehicleServices.jsx'));
const Permits = lazy(() => import('./pages/Permits.jsx'));
const Payments = lazy(() => import('./pages/Payments.jsx'));
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'));
const HelpCenter = lazy(() => import('./pages/HelpCenter.jsx'));
const Resources = lazy(() => import('./pages/Resources.jsx'));
const News = lazy(() => import('./pages/News.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));

// Form Interaction Models
const DrivingLicenseForm = lazy(() => import('./pages/DrivingLicenseForm.jsx'));
const VehicleRegistrationForm = lazy(() => import('./pages/VehicleRegistrationForm.jsx'));
const PermitApplicationForm = lazy(() => import('./pages/PermitApplicationForm.jsx'));
const StatusLookupForm = lazy(() => import('./pages/StatusLookupForm.jsx'));

// Placeholder Service Interfaces
const LearnerLicense = lazy(() => import('./pages/LearnerLicense.jsx'));
const DrivingTestBooking = lazy(() => import('./pages/DrivingTestBooking.jsx'));
const LicenseRenewal = lazy(() => import('./pages/LicenseRenewal.jsx'));
const TransferOwnership = lazy(() => import('./pages/TransferOwnership.jsx'));
const DuplicateRC = lazy(() => import('./pages/DuplicateRC.jsx'));
const VehicleStatusLookup = lazy(() => import('./pages/VehicleStatusLookup.jsx'));
const GoodsPermit = lazy(() => import('./pages/GoodsPermit.jsx'));
const PassengerPermit = lazy(() => import('./pages/PassengerPermit.jsx'));
const RoadTax = lazy(() => import('./pages/RoadTax.jsx'));
const ServiceFee = lazy(() => import('./pages/ServiceFee.jsx'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[60vh] py-20">
    <div className="loading-spinner"></div>
  </div>
);

const App = () => {
  return (
    <AccessibilityProvider>
      <Router>
        <MainLayout>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/driving-license" element={<DrivingLicense />} />
              <Route path="/services/vehicle-services" element={<VehicleServices />} />
              <Route path="/services/permits" element={<Permits />} />
              <Route path="/services/payments" element={<Payments />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/news" element={<News />} />
              <Route path="/about" element={<About />} />
              
              {/* Form Interaction Routes */}
              <Route path="/services/driving-license/apply" element={<DrivingLicenseForm />} />
              <Route path="/services/vehicle-services/apply" element={<VehicleRegistrationForm />} />
              <Route path="/services/permits/apply" element={<PermitApplicationForm />} />
              <Route path="/status-lookup" element={<StatusLookupForm />} />

              {/* Placeholder Service Routes */}
              <Route path="/services/driving-license/apply-ll" element={<LearnerLicense />} />
              <Route path="/services/driving-license/book-test" element={<DrivingTestBooking />} />
              <Route path="/services/driving-license/renew" element={<LicenseRenewal />} />
              <Route path="/services/driving-license/status" element={<VehicleStatusLookup title="License Status" description="Check the validity and history of your driving license." />} />
              
              <Route path="/services/vehicle-services/registration" element={<VehicleRegistrationForm />} />
              <Route path="/services/vehicle-services/transfer" element={<TransferOwnership />} />
              <Route path="/services/vehicle-services/duplicate-rc" element={<DuplicateRC />} />
              <Route path="/services/vehicle-services/status" element={<VehicleStatusLookup />} />

              <Route path="/services/permits/goods" element={<GoodsPermit />} />
              <Route path="/services/permits/passenger" element={<PassengerPermit />} />

              <Route path="/services/payments/road-tax" element={<RoadTax />} />
              <Route path="/services/payments/service-fee" element={<ServiceFee />} />

              {/* Catch-all route to prevent blank pages */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </Router>
    </AccessibilityProvider>
  );
};

export default App;
