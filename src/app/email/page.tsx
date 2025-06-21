'use client';
import Menu from "../menu";
import React from 'react';
import Footer from "../footer";

export default function ComingSoon() {
  return (<><div className="bg-gradient-to-br from-[#ff6ec4] to-[#7873f5]">
    <div className="sticky top-0 z-50 scroll ">
            <Menu />
          </div>
    <div className="min-h-screen bg-gradient-to-br from-[#ff6ec4] to-[#7873f5] flex items-center justify-center px-6">
      <div className="bg-white/10 backdrop-blur-md shadow-2xl rounded-3xl p-10 max-w-xl w-full text-center text-white space-y-6 border border-white/30">
        <h1 className="text-5xl font-bold tracking-tight">🚀 Coming Soon</h1>
        <p className="text-lg text-white/80">
          We’re working hard on something amazing. Stay tuned!
        </p>

        <div className="flex justify-center gap-4 text-2xl font-semibold">
          <Countdown />
        </div>

        <form className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-md w-full md:w-auto text-black outline-none"
          />
          <button
            type="submit"
            className="bg-white text-purple-700 font-semibold px-5 py-3 rounded-md hover:bg-purple-100 transition"
          >
            Notify Me
          </button>
        </form>

        <p className="text-sm text-white/60 mt-4">
          © {new Date().getFullYear()} ScrapoTech. All rights reserved.
        </p>
      </div>
    </div>
    
  </div><Footer></Footer></>);
}

function Countdown() {
  const [time, setTime] = React.useState(getTimeRemaining());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div>{time.days}</div>
        <span className="text-sm text-white/60">Days</span>
      </div>
      <div>
        <div>{time.hours}</div>
        <span className="text-sm text-white/60">Hours</span>
      </div>
      <div>
        <div>{time.minutes}</div>
        <span className="text-sm text-white/60">Minutes</span>
      </div>
      <div>
        <div>{time.seconds}</div>
        <span className="text-sm text-white/60">Seconds</span>
      </div>
    </>
  );
}

function getTimeRemaining() {
  const launchDate = new Date('2025-08-01T00:00:00'); // Set your target date
  const now = new Date();
  const diff = launchDate.getTime() - now.getTime();

  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((diff / 1000 / 60) % 60));
  const seconds = Math.max(0, Math.floor((diff / 1000) % 60));

  return { days, hours, minutes, seconds };
}
