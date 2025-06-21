import React from 'react'

function How() {
  return (
    <div className='rounded-b-[100px] h-[60vh]  bg-gradient-to-r from-gray-800 via-black to-gray-900'>
        <div className="flex justify-center items-center text-4xl pt-[40px] mb-8">
            <p>HOW IT WORKS</p>
        </div>

        <div className="divo rounded-sm flex flex-row justify-center items-center gap-10 pt-[10px] mx-[40px] mb-12">
                <div className="flex flex-col items-center justify-center h-[20vh] w-[20vw]">
                    <div className="rounded-full h-[30px] w-[30px] bg-blue-700 flex items-center justify-center">1</div>
                    <div className="text-xl text-center mt-4 font-bold">You choose our service</div>
                </div>

                <img 
                    src="traffic-arrow-sign-close-up.jpg" 
                    alt="first" 
                    width={100} 
                    height={100}
                    className="self-center"
                />

                <div className="flex flex-col items-center justify-center h-[20vh] w-[20vw]">
                    <div className="rounded-full h-[30px] w-[30px] bg-blue-700 flex items-center justify-center">2</div>
                    <div className="text-xl text-center mt-4 font-bold">our software start working</div>
                </div>

                <img 
                    src="/traffic-arrow-sign-close-up.jpg" 
                    alt="second" 
                    width={100} 
                    height={100}
                    className="self-center"
                />

                <div className="flex flex-col items-center justify-center h-[20vh] w-[20vw]">
                    <div className="rounded-full h-[30px] w-[30px] bg-blue-700 flex items-center justify-center">3</div>
                    <div className="text-xl text-center mt-4 font-bold">Your request fullfilled</div>
                </div>
            </div>
    </div>
  )
}

export default How
