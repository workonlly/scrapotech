import React, { Suspense } from 'react';
import Menu from '@/app/menu';
import Footer from '@/app/footer';
import '../../globals.css';
import FailureContent from './FailureContent';

const PaymentFailurePage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-red-900 via-black to-black text-white">
      <Menu />
      <main className="container mx-auto px-4 py-12 flex items-center justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <FailureContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentFailurePage;
