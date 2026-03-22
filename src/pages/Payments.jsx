import React, { useState, useRef, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { CreditCard, Landmark, Wallet, ShieldCheck, CheckCircle, ArrowRight, DollarSign, Receipt } from 'lucide-react';
import { savePayment, getPayments } from '../utils/simulation';

/* 
  Payments section simulates a payment gateway interaction.
  All transactions are mock data stored in localStorage for demonstration.
*/

const Payments = () => {
  const [selectedMethod, setSelectedMethod] = useState('credit-card');
  const [paid, setPaid] = useState(false);
  const [txnData, setTxnData] = useState(null);
  const [history, setHistory] = useState([]);
  const formRef = useRef();

  useEffect(() => {
    setHistory(getPayments().slice(0, 5));
  }, [paid]);

  const handlePay = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const service = formData.get('service');
    
    const payment = savePayment({
      amount: '₹1,550.00',
      service: service || 'Road Tax',
      method: selectedMethod.toUpperCase().replace('-', ' ')
    });

    setTxnData(payment);
    setPaid(true);
  };

  if (paid && txnData) {
    return (
      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="container-custom max-w-xl">
          <div className="card bg-white p-12 text-center rounded-3xl shadow-xl border border-gray-100">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-3xl font-black text-gov-blue-900 mb-2">Payment Successful</h2>
            <p className="text-gray-500 mb-8 font-medium">Simulation Environment • Data logged locally</p>
            
            <div className="bg-gray-50 rounded-2xl p-8 mb-8 text-left space-y-4 border border-gray-100">
              <div className="flex justify-between border-b border-gray-200 pb-3">
                <span className="text-sm text-gray-400 font-bold uppercase tracking-widest">Transaction ID</span>
                <span className="font-mono font-black text-gray-900">{txnData.id}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-3">
                <span className="text-sm text-gray-400 font-bold uppercase tracking-widest">Service</span>
                <span className="font-bold text-gray-900">{txnData.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400 font-bold uppercase tracking-widest">Amount Paid</span>
                <span className="font-black text-gov-blue-700">{txnData.amount}</span>
              </div>
            </div>

            <button 
              onClick={() => setPaid(false)}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              Make Another Payment <ArrowRight size={20} />
            </button>
            <p className="mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Prototype Receipt Mockup • State Transport Department</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <Breadcrumb />
        
        <div className="mb-12">
          <h1 className="text-4xl font-black text-gov-blue-900 mb-4">Online Payments</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            This interface demonstrates the payment flow for road tax, registration fees, and permit charges for a conceptual state transport system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Payment Form */}
          <div className="lg:col-span-2 space-y-8">
            <form ref={formRef} onSubmit={handlePay} className="card bg-white p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-8 border-b pb-4">Service Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Vehicle Number / App ID</label>
                  <input name="id" type="text" placeholder="e.g. [Registration Number Placeholder]" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gov-blue-200 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Payment Category</label>
                  <select name="service" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gov-blue-200 outline-none bg-white">
                    <option value="Annual Road Tax">Annual Road Tax</option>
                    <option value="New Registration Fee">New Registration Fee</option>
                    <option value="Permit Renewal">Permit Renewal</option>
                    <option value="Application Fee">Application Fee</option>
                  </select>
                </div>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Payment Method</h2>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { id: 'credit-card', name: 'Card', icon: CreditCard },
                  { id: 'net-banking', name: 'Banking', icon: Landmark },
                  { id: 'upi', name: 'UPI', icon: Wallet },
                ].map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setSelectedMethod(method.id)}
                    className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all ${
                      selectedMethod === method.id 
                      ? 'border-gov-blue-600 bg-gov-blue-50 text-gov-blue-700' 
                      : 'border-gray-100 hover:border-gray-200 text-gray-500'
                    }`}
                  >
                    <method.icon size={24} className="mb-2" />
                    <span className="text-xs font-bold uppercase tracking-wider">{method.name}</span>
                  </button>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600 font-medium">Subtotal</span>
                  <span className="font-bold text-gray-900">₹1,500.00</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600 font-medium">Service Fee (₹50)</span>
                  <span className="font-bold text-gray-900">₹50.00</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-lg font-bold text-gray-900">Total Amount</span>
                  <span className="text-2xl font-black text-gov-blue-700">₹1,550.00</span>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                Execute Simulated Payment <ArrowRight size={20} />
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-400 font-medium uppercase tracking-widest text-center px-4">
                <span className="flex items-center gap-1"><ShieldCheck size={14} /> Interface Mockup • Non-transmitted Data</span>
              </div>
            </form>
          </div>

          {/* Tips/Info Sidebar */}
          <div className="space-y-6">
            <div className="card bg-gov-blue-900 text-white overflow-hidden">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <DollarSign className="text-gov-blue-400" size={20} />
                Tax Savings
              </h3>
              <p className="text-sm text-gov-blue-100 mb-6 leading-relaxed opacity-80">
                Pay your annual road tax before the due date to avoid late penalties of up to 15% per month.
              </p>
              <div className="flex items-center gap-2 p-3 bg-white/10 rounded-lg">
                <CheckCircle size={16} className="text-green-400 shrink-0" />
                <span className="text-xs font-medium">Early payment discount applied</span>
              </div>
            </div>

            <div className="card">
              <h3 className="font-bold text-gray-900 mb-4">Recent Local Payments</h3>
              <div className="space-y-4">
                {history.length > 0 ? (
                  history.map((p, i) => (
                    <div key={i} className="flex justify-between items-center text-sm border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                      <div>
                        <p className="font-bold text-gray-800">{p.amount}</p>
                        <p className="text-[10px] text-gray-500 uppercase">{p.date} • {p.service}</p>
                      </div>
                      <span className="text-[10px] font-black uppercase text-green-600 bg-green-50 px-2 py-0.5 rounded">
                        {p.status}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-gray-400 italic">No local payment history found.</p>
                )}
              </div>
              <button className="w-full mt-4 py-2 text-xs font-bold text-gov-blue-700 hover:bg-gov-blue-50 rounded-lg transition-colors">
                View All History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
