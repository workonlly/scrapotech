'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Player to avoid SSR issues
const LottiePlayer = dynamic(() => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[400px]">
      <div className="w-[500px] h-[400px]"></div>
    </div>
  )
});

export default function Play() {
  return (
    <div className="flex items-center justify-center h-[400px] overflow-hidden">
      <LottiePlayer
        autoplay
        loop
        src="./Animation - 1749082854712.json"
        style={{ 
          width: '500px',
          height: '400px',
          margin: '0 auto'
        }}
      />
    </div>
  );
}
