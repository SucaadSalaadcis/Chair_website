import React from 'react'
import chair from '../assets/img/chairs/chair.png'
import chair8 from '../assets/img/chairs/chair8.png'
import chair7 from '../assets/img/chairs/chair7.png'

export default function Section2() {
    return (
        <div className='flex justify-between gap-10 px-24 mb-32'>
            {/* left text */}
            <div className='mt-32'>
                <p className='text-4xl font-semibold text-gray-700'>Crafted with <br />excellent<br /> material.</p>
                <p className='mt-5 text-sm leading-7 text-gray-500'>Donec vitae odio quis nisl dapibus <br /> malesuada. Nullam ac aliquet velit. <br /> Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <button className='p-3 px-6 mt-5 font-bold text-white rounded-full bg-zinc-800'>Explore</button>
            </div>
            {/* 3 chairs  */}
            <div className="flex items-center justify-between mt-10">
                {/* First Chair */}
                <div className="flex flex-col items-center">
                    <img src={chair} alt="Nordic Chair" className="h-80 w-80" />
                    <p className="mt-4 text-xl font-bold text-zinc-800">Nordic Chair</p>
                    <p className="text-lg font-bold text-zinc-800">$50.00</p>
                </div>

                {/* Second Chair */}
                <div className="flex flex-col items-center">
                    <img src={chair8} alt="Nordic Chair" className="w-auto mt-10 h-70" />
                    <p className="mt-4 text-xl font-bold text-zinc-800">Kruzo Aero Chair</p>
                    <p className="text-lg font-bold text-zinc-800">$78.00</p>
                </div>

                {/* Third Chair */}
                <div className="flex flex-col items-center">
                    <img src={chair7} alt="Nordic Chair" className="mt-10 h-70 w-90" />
                    <p className="mt-4 text-xl font-bold text-zinc-800">Ergonomic Chair</p>
                    <p className="text-lg font-bold text-zinc-800">$43.00</p>
                </div>
            </div>


        </div>
    )
}
