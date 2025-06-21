'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Menu from '@/app/menu';
import Footer from '@/app/footer';
import '../../../globals.css';

const PaymentFailurePage = () => {
  const searchParams = useSearchParams();
  const txnid = searchParams.get('txnid');
  const status = searchParams.get('status');
  const message = searchParams.get('message');

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-red-900 via-black to-black text-white">
      <Menu />
      <main className="container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center bg-black/30 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-red-700">
          <h1 className="text-4xl font-extrabold text-red-400 mb-4">Payment Failed</h1>
          <p className="text-lg text-gray-300 mb-6">Unfortunately, we were unable to process your payment. Please try again or contact support.</p>
          <div className="text-left text-sm text-gray-400 space-y-2">
            {txnid && txnid !== 'N/A' && (
              <p>Transaction ID: <span className="font-mono text-red-300">{txnid}</span></p>
            )}
            {status && status !== 'N/A' && (
              <p>Status: <span className="font-mono text-red-300">{status}</span></p>
            )}
            {message && (
              <p>Message: <span className="font-mono text-red-300">{message}</span></p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentFailurePage;
