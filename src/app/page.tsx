'use client';

import Image from "next/image";
import Menu from "./menu";
import Play from "./player";
import { Alfa_Slab_One } from 'next/font/google';
import Link from "next/link";
import Box from "./box";
import How from "./how";
import Footer from "./footer";

const alfa = Alfa_Slab_One({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-50 scroll bg-gradient-to-r from-gray-800 via-black to-gray-900">
        <Menu />
      </div>

      <section className=" bg-gradient-to-r from-gray-800 via-black to-gray-900 py-20">
        <div className="flex flex-col items-center justify-center gap-3 mb-20">
          <div className={`text-7xl scrapo gradient-shadow-text ${alfa.className} typingeffect`}>
            On demand web scraping
          </div>
          <div className={`text-7xl scrapo gradient-shadow-text ${alfa.className} typingeffect`}>
            for your business
          </div>
          <div className="text-2xl">All inclusive service, any data.</div>
          <div className="fadeup mt-[40px]">
            <Link href="/services" className="border-x border-pink-200 px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-colors mt-8">
              Try our service!!
            </Link>
          </div>
        </div>

        <div className="w-full">
          <Play />
        </div>
      </section>

      <Box />

      <div className="bg-white backdrop-blur-md">
        <How />
      </div>

      <div className="bg-white backdrop-blur-md h-[80vh] flex flex-col items-center justify-center gap-10">
        <div className="font-bold text-4xl !text-black">Our customer reviews</div>
        <div className="flex flex-row items-center justify-center gap-10">
          <div className="bg-[#8338ec] backdrop-blur-md w-[40vw] h-[50vh] flex flex-col items-center justify-center rounded-md">
            <div className="rounded-full h-[100px] w-[100px] bg-white "></div>
            <div className="text-3xl">Jhon Reffeny</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
            <div>Enim, omnis illo quo iusto distinctio accusantium maxime</div>
            <div>repellat dolor dolores voluptatem consequuntur.</div>
            <div>Dolorem quasi eius quis at? Ullam rem earum ratione?</div>
          </div>

          <div className="bg-[#8338ec] backdrop-blur-md w-[40vw] h-[50vh] flex flex-col items-center justify-center rounded-md">
            <div className="rounded-full h-[100px] w-[100px] bg-white "></div>
            <div className="text-3xl">Samen Jennifer</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
            <div>Enim, omnis illo quo iusto distinctio accusantium maxime</div>
            <div>repellat dolor dolores voluptatem consequuntur.</div>
            <div>Dolorem quasi eius quis at? Ullam rem earum ratione?</div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="h-[40vh] divo flex flex-col items-center justify-center rounded-t-[100px]">
          <div className="text-4xl">Make your web scraping project a success with Stratalis.</div>
          <div className="text-2xl">Rely on scraping veterans, benefit from expert advice, save time and get your data cost-effectively</div>
          <div className="flex flex-row items-center justify-center gap-3">
            <Link href="" className="h-[8vh] w-[15vw] bg-black/50 backdrop-blur-md flex items-center justify-center rounded-sm m-[20px]">
              Try our services!!
            </Link>
            <Image src="/arrow-illustration-isolated.png" alt="" height={100} width={100} className="rotate-[60deg]" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
