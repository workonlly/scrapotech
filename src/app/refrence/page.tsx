'use client'
import React from 'react'
import Menu from '../menu'
import Footer from '../footer'


function Page() {
  return (
    <div className=" text-black">
      <Menu />

      {/* Hero Section with Gradient */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-24 px-6 rounded-b-[4rem]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Text */}
          <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
            <h1 className="text-5xl font-extrabold leading-tight">
              Data Scraping That Delivers
            </h1>
            <p className="text-lg text-gray-300">
              We specialize in bypassing anti-scraping protections to extract the data that matters—fast, reliable, and compliant.
            </p>
            <p className="text-md text-gray-400">
              Whether you're tracking competitors, gathering leads, or mining data for AI, our infrastructure and expertise scale with your goals.
            </p>
          </div>

          {/* Right Info Cards */}
          <div className="w-full md:w-1/2 space-y-5">
            {["99.9% Uptime", "24/7 Scraping Support", "Global IP Rotation"].map((item, i) => (
              <div
                key={i}
                className="bg-violet-300 bg-opacity-80 text-black py-6 px-8 rounded-xl shadow-md hover:shadow-lg transform hover:scale-[1.03] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Page
