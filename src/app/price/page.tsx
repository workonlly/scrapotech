'use client';

import React from 'react';
import Menu from '../menu';
import Footer from '../footer';
import '../globals.css';

const plans = [
  { name: 'Free', price: 0, action: 'Already Active', disabled: true },
  { name: 'Basic', price: 499 },
  { name: 'Pro', price: 999 },
  { name: 'Enterprise', price: 1999 },
];

const Page = () => {
  const handlePayment = async (amount: number) => {
    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          firstname: 'User',
          email: 'test@example.com',
          phone: '9999999999',
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        alert(`Payment failed: ${errorText}`);
        return;
      }

      const html = await response.text();
      const newWindow = window.open('', '_self');
      if (newWindow) {
        newWindow.document.open();
        newWindow.document.write(html);
        newWindow.document.close();
      }
    } catch (error) {
      console.error('Payment Error:', error);
      alert('Something went wrong while processing the payment.');
    }
  };

  return (
    <>
    <div className='bg-gradient-to-r from-pink-400 via-red-400 to-violet-500'>
      <Menu />

      {/* Hero Section */}
      <section className="min-h-[40vh] bg-gradient-to-r from-pink-400 via-red-400 to-violet-500 text-white flex flex-col items-center justify-center gap-6 px-4 py-24 text-center">
        <h1 className="text-5xl font-extrabold scrapo">Pricing That Works for You</h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Companies across the globe trust us to power their data strategies.
          Whether you're just starting or scaling big, we’ve got a plan for you.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="bg-gradient-to-r from-pink-400 via-red-400 to-violet-500 py-15 px-6 flex justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">{plan.name}</h2>
                <p className="text-2xl font-semibold text-pink-300">₹{plan.price}</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>✓ Secure Transactions</li>
                  <li>✓ Instant Activation</li>
                  <li>✓ Email Support</li>
                  {plan.name !== 'Free' && <li>✓ Priority Crawling</li>}
                </ul>
              </div>
              <button
                onClick={() => !plan.disabled && handlePayment(plan.price)}
                disabled={plan.disabled}
                className={`mt-6 w-full py-3 rounded-lg text-white font-medium transition-all ${
                  plan.disabled
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-pink-500 hover:bg-pink-600'
                }`}
              >
                {plan.action || `Buy ${plan.name}`}
              </button>
            </div>
          ))}
        </div>
      </section>
      </div>
      

      <Footer />
    </>
  );
};

export default Page;

