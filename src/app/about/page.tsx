import React from 'react';
import Menu from '../menu';
import Footer from '../footer';

function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700">
      <Menu />
      
      {/* Hero Section with Gradient */}
      <div className="min-h-[70vh] bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white rounded-b-4xl px-8 py-20 flex flex-col justify-center items-center">
        <div className="max-w-4xl text-center space-y-6">
          <h1 className="text-5xl font-extrabold drop-shadow-md">Scraping is Confidential</h1>
          <p className="text-lg text-white/90">
            Your data scraping needs are safe with us. We provide robust, secure, and private web scraping solutions that prioritize compliance and ethics.
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white !text-black px-6 py-16">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Scraping is easy. Right?</h2>
          <p className="text-lg !text-black">
            Sure. With novice programmers often training on scraping assignments and several point-and-click scraping tools out there, scraping sounds easy.
          </p>
          <p className="text-lg !text-black">
            But when it comes to enterprise-grade scraping that can overcome anti-scraping protections, deliver cost-effective results at scale,
            navigate complex websites, and adapt to ever-changing targets, you need a seasoned team that’s been through it all.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
