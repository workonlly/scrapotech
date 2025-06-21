import React, { Suspense } from 'react';
import Menu from '@/app/menu';
import Footer from '@/app/footer';
import '../../globals.css';
import SuccessContent from './SuccessContent';

const PaymentSuccessPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-900 via-black to-black text-white">
      <Menu />
      <main className="container mx-auto px-4 py-12 flex items-center justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <SuccessContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentSuccessPage;
