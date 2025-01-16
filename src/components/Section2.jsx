import React from 'react'
import chair from '../assets/img/chairs/chair.png'
import chair8 from '../assets/img/chairs/chair8.png'
import chair7 from '../assets/img/chairs/chair7.png'

export default function Section2() {
    return (
        <div className='gap-10 pl-10 mb-32 text-center md:text-start md:justify-between md:flex md:px-24'>
            {/* left text */}
            <div className='mt-32'>
                <p className='text-lg text-gray-700 md:text-4xl'>Crafted with <br />excellent<br /> material.</p>
                <p className='mt-5 text-sm leading-7 text-gray-500'>Donec vitae odio quis nisl dapibus <br /> malesuada. Nullam ac aliquet velit. <br /> Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <button className='p-3 px-6 mt-5 font-bold text-white rounded-full bg-zinc-800'>Explore</button>
            </div>
            {/* 3 chairs  */}
            <div className="flex items-center justify-between md:mt-10">
                {/* First Chair */}
                <div className="flex flex-col items-center">
                    <img src={chair} alt="Nordic Chair" className="md:h-80 w-80" />
                    <p className="mt-4 font-bold md:text-xl text-zinc-800">Nordic Chair</p>
                    <p className="font-bold md:text-lg text-zinc-800">$50.00</p>
                </div>

                {/* Second Chair */}
                <div className="flex flex-col items-center">
                    <img src={chair8} alt="Nordic Chair" className="w-auto mt-10 md:h-70" />
                    <p className="mt-4 font-bold md:text-xl text-zinc-800">Kruzo Aero Chair</p>
                    <p className="font-bold md:text-lg text-zinc-800">$78.00</p>
                </div>

                {/* Third Chair */}
                <div className="flex flex-col items-center">
                    <img src={chair7} alt="Nordic Chair" className="mt-10 md:h-70 w-90" />
                    <p className="mt-4 font-bold md:text-xl text-zinc-800">Ergonomic Chair</p>
                    <p className="font-bold md:text-lg text-zinc-800">$43.00</p>
                </div>
            </div>


        </div>
    )
}
