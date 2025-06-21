import React from 'react'
import { Sedgwick_Ave } from 'next/font/google';
import Link from 'next/link';

const sedgwick = Sedgwick_Ave({ weight: '400', subsets: ['latin'] });

function Footer() {
  return (
    <div>
      <div className="bg-black h-[55vh] p-[20px] flex items-center justify-center gap-10">
      <div className=" flex flex-col justify-center items-center h-[50vh] w-[20vw]">
        <div className={` text-9xl ${sedgwick.className} scrapo `}>S</div>
        <div className={`font-semibold ${sedgwick.className}`}>Scrapotech</div>
        <div className='font-semibold '>Your one shot scraping solution</div>
      </div>
      <div className="flex flex flex-col  items-center h-[50vh] w-[20vw] gap-5">
        <div className={`text-xl  ${sedgwick.className}`} >Services</div>
        <div className='flex flex-col gap-3'>
        <Link href="/web"> <div className='font-semibold rounded-sm  p-[5px] ring-3 ring-[#8338ec] hover:bg-[#8338ec]'> Web scraping</div></Link>
         <div className='font-semibold rounded-sm  p-[5px] ring-3 ring-[#8338ec] hover:bg-[#8338ec]'> Linkedin scraping</div>
          <div className='font-semibold rounded-sm  p-[5px] ring-3 ring-[#8338ec] hover:bg-[#8338ec]'> Email scraping</div>
           <div className='font-semibold rounded-sm  p-[5px] ring-3 ring-[#8338ec] hover:bg-[#8338ec]'> Domain extractor</div>
           </div>
        </div>
     <div className="flex flex flex-col  items-center h-[50vh] w-[20vw] gap-5">
        <div className={`text-xl  ${sedgwick.className}`} >Contacts</div>
        <div className='flex flex-col p-[20px] gap-3  h-[50vh] w-[20vw]'>
        <div className='font-semibold rounded-sm  p-[5px]  hover:bg-[#8338ec]'> Email :</div>
           </div>
        </div>
    </div>
    <div className="h-[1vh] rounded-full w-auto divo ml-[20px] mr-[20px]"></div>

    <div className="h-[5vh]  w-auto  ml-[30px] mr-[30px] flex flex-row justify-between">
    <div>Terms and Condition</div>
    <div>Copyright</div>
    </div>
    </div>
  )
}

export default Footer
