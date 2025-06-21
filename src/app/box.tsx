import React from 'react'
import { Alfa_Slab_One } from 'next/font/google';
const alfa = Alfa_Slab_One({
  weight: '400',
  subsets: ['latin'],
});

function Box() {
  return (
    <div className='bg-gradient-to-r from-gray-800 via-black to-gray-900'>
      <div className="flex flex-col items-center" >
      <div className="flex flex-row g-2">  
        <div className=" divo  h-[60vh] w-[40vw] m-[5px] rounded-sm p-4 flex flex-col">
          <img src="/Gemini_Generated_Image_df6706df6706df67-removebg-preview.png" alt="image" width={150} height={150} />
          <div className={`text-4xl bold ${alfa.className}`}>Web scraper</div>
          <div className="p-2 font-semibold text-wrap break-words overflow-auto max-h-[40vh]">
            Looking to gain a competitive edge through data? Our web scraping service helps you unlock valuable insights by extracting real-time, structured data from any website—automatically and at scale. Whether you need product listings, pricing data, contact details, reviews, or custom datasets, we build tailored scraping solutions that save you time and effort. Our team handles everything—from dynamic content and login-protected pages to anti-bot protection—using advanced tools like Selenium, Playwright, and BeautifulSoup. You focus on growing your business while we deliver clean, organized data directly to your inbox or database. Let us help you turn the web into your smartest data source.
          </div>
        </div>
        <div className=" divo   h-[60vh] w-[40vw] m-[5px] rounded-sm p-4 flex flex-col">
          <img src="6447055-removebg-preview (1).png" alt="image" width={240} height={240} />
          <div className={`text-4xl bold ${alfa.className}`}>Linkedin scraper</div>
          <div className="p-2 font-semibold text-wrap break-words overflow-auto max-h-[40vh]">
            Looking to gain a competitive edge through data? Our web scraping service helps you unlock valuable insights by extracting real-time, structured data from any website—automatically and at scale. Whether you need product listings, pricing data, contact details, reviews, or custom datasets, we build tailored scraping solutions that save you time and effort. Our team handles everything—from dynamic content and login-protected pages to anti-bot protection—using advanced tools like Selenium, Playwright, and BeautifulSoup. You focus on growing your business while we deliver clean, organized data directly to your inbox or database. Let us help you turn the web into your smartest data source.
          </div>
        </div>
      </div>

      <div className="flex flex-row g-2"> 
        <div className=" divo h-[60vh] w-[40vw] m-[5px] rounded-sm p-4 flex flex-col">
          <img src="/2880031-removebg-preview.png" alt="image" width={150} height={150} />
          <div className={`text-4xl bold ${alfa.className}`}>Email scraper</div>
          <div className="p-2 font-semibold text-wrap break-words overflow-auto max-h-[40vh]">
            Looking to gain a competitive edge through data? Our web scraping service helps you unlock valuable insights by extracting real-time, structured data from any website—automatically and at scale. Whether you need product listings, pricing data, contact details, reviews, or custom datasets, we build tailored scraping solutions that save you time and effort. Our team handles everything—from dynamic content and login-protected pages to anti-bot protection—using advanced tools like Selenium, Playwright, and BeautifulSoup. You focus on growing your business while we deliver clean, organized data directly to your inbox or database. Let us help you turn the web into your smartest data source.
          </div>
        </div>
        <div className=" divo h-[60vh] w-[40vw] m-[5px] rounded-sm p-4 flex flex-col">
          <img src="/6471739-removebg-preview.png" alt="image" width={150} height={150} />
          <div className={`text-4xl bold ${alfa.className}`}>Domain extractor</div>
          <div className="p-2 font-semibold text-wrap break-words overflow-auto max-h-[40vh]">
            Looking to gain a competitive edge through data? Our web scraping service helps you unlock valuable insights by extracting real-time, structured data from any website—automatically and at scale. Whether you need product listings, pricing data, contact details, reviews, or custom datasets, we build tailored scraping solutions that save you time and effort. Our team handles everything—from dynamic content and login-protected pages to anti-bot protection—using advanced tools like Selenium, Playwright, and BeautifulSoup. You focus on growing your business while we deliver clean, organized data directly to your inbox or database. Let us help you turn the web into your smartest data source.
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Box;
