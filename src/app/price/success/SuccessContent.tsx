'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';

const SuccessContent = () => {
    const searchParams = useSearchParams();
    const txnid = searchParams.get('txnid');

    return (
        <div className="max-w-md mx-auto text-center bg-black/30 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-green-700">
          <h1 className="text-4xl font-extrabold text-green-400 mb-4">Payment Successful!</h1>
          <p className="text-lg text-gray-300 mb-6">Thank you for your purchase. Your transaction has been completed successfully.</p>
          {txnid && (
            <p className="text-md text-gray-400">Transaction ID: <span className="font-mono text-green-300">{txnid}</span></p>
          )}
        </div>
    );
};

export default SuccessContent;
