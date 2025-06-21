'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import './globals.css';
import { Sedgwick_Ave } from 'next/font/google';

const sedgwick = Sedgwick_Ave({ weight: '400', subsets: ['latin'] });

export default function Menu() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full fadein">
      <div className='backo backos shadow-md backdrop-blur-md h-[20vh] pb-[5px] w-full rounded-b-[200px] flex flex-row justify-center'>
        <div className="w-full flex flex-row items-center justify-center rounded-b-[180px] bg-black/80 shadow-md backdrop-blur-xl px-4 ">
          <div className="flex flex-row justify-center items-center gap-4">
            <Link 
              href="/" 
              className={`inline-block text-[50px] mr-[30px] mt-[20px] h-[15vh] ${sedgwick.className}`}
            >
              <span className="scrapo">ScrapoTech</span>
            </Link>

            <div className="flex flex-row gap-3 pt-[15px]">
              <div className="relative group cursor-pointer inline-block -ml-4">
                <div className="text-lg font-semibold rounded-sm p-[2px] hover:shadow-blue-500/50 hover:shadow-xl">
                  <Link href="">Services</Link>
                </div>
                <div className="absolute left-1/4 transform -translate-x-1/4 top-full bg-black/50 hidden group-hover:flex group-hover:block flex-row justify-between backdrop-blur-md shadow-md rounded-lg p-4 w-[80vw] space-x-4 z-10">
                  <Link href="/web" target='_blank'>
                    <div className="scrapo cursor-pointer font-bold text-3xl hover:ring hover:rounded-sm hover:ring-blue-300 p-[5px]">Web Scraper</div>
                  </Link>
                  <Link href="/linkd" target='_blank'><div className="scrapo cursor-pointer font-bold text-3xl hover:ring hover:rounded-sm hover:ring-blue-300 p-[5px]">LinkedIn Scrapper</div></Link>
                  <Link href="/email" target='_blank'><div className="scrapo cursor-pointer font-bold text-3xl hover:ring hover:rounded-sm hover:ring-blue-300 p-[5px]">Email Scrapper</div></Link>
                  <Link href="/domain" target='_blank'><div className="scrapo cursor-pointer font-bold text-3xl hover:ring hover:rounded-sm hover:ring-blue-300 p-[5px]">Domain extractor</div></Link>
                </div>
              </div>

              <div className='text-lg font-semibold rounded-sm p-[2px] hover:shadow-blue-500/50 hover:shadow-xl'>
                <Link href="/price" target='_blank'>Pricing</Link>
              </div>

              <div className='text-lg font-semibold rounded-sm p-[2px] hover:shadow-blue-500/50 hover:shadow-xl'>
                <Link href="/refrence" target='_blank'>References</Link>
              </div>

              <div className='text-lg font-semibold rounded-sm p-[2px] hover:shadow-blue-500/50 hover:shadow-xl'>
                <Link href="/about" target='_blank'>About</Link>
              </div>
            </div>
          </div>

          {/* Google Auth buttons */}
          <div className="flex flex-row items-center justify-center gap-3 right-0 ml-[30vh] mt-[10px]">
            {!session ? (
              <>
                <div onClick={() => signIn('google')} className="px-4 py-2 rounded-md bold hover:shadow-xl hover:shadow-blue-500/50 cursor-pointer">
                  Login with Google
                </div>
              </>
            ) : (
              <>
                <div className="px-4 py-2 rounded-md bold">
                  Hello {session.user?.name}
                </div>
                <div onClick={() => signOut()} className="px-4 py-2 rounded-md bold hover:shadow-xl hover:shadow-blue-500/50 cursor-pointer">
                  Logout
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}
