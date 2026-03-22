/**
 * simulation.js
 * 
 * This utility provides functions to simulate backend operations using localStorage.
 * It is used to demonstrate working interactions without requiring a real database.
 * All data is stored locally in the user's browser.
 */

const STORAGE_KEYS = {
  APPLICATIONS: 'transport_portal_applications',
  PAYMENTS: 'transport_portal_payments'
};

// Helper to generate a random ID
const generateId = (prefix) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = prefix + '-';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// Applications
export const saveApplication = (data, serviceType) => {
  const applications = JSON.parse(localStorage.getItem(STORAGE_KEYS.APPLICATIONS) || '[]');
  const newApp = {
    id: generateId('APP'),
    service: serviceType,
    date: new Date().toISOString().split('T')[0],
    status: 'Submitted',
    data: data,
    history: [
      { status: 'Submitted', date: new Date().toLocaleString(), note: 'Application received via digital interface.' }
    ]
  };
  applications.unshift(newApp);
  localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(applications));
  return newApp;
};

export const getApplications = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.APPLICATIONS) || '[]');
};

export const findApplicationById = (id) => {
  const apps = getApplications();
  return apps.find(a => a.id === id || a.id.replace('APP-', '') === id);
};

// Payments
export const savePayment = (data) => {
  const payments = JSON.parse(localStorage.getItem(STORAGE_KEYS.PAYMENTS) || '[]');
  const newPayment = {
    id: generateId('TXN'),
    date: new Date().toISOString().split('T')[0],
    amount: data.amount || '₹0.00',
    service: data.service || 'General Fee',
    status: 'Success',
    method: data.method || 'Credit Card'
  };
  payments.unshift(newPayment);
  localStorage.setItem(STORAGE_KEYS.PAYMENTS, JSON.stringify(payments));
  return newPayment;
};

export const getPayments = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.PAYMENTS) || '[]');
};
