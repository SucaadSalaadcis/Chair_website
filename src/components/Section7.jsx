import React from 'react'
import chair11 from '../assets/img/chairs/chair11.jpg'
import chair12 from '../assets/img/chairs/chair12.jpg'
import chair13 from '../assets/img/chairs/chair13.jpg'

export default function Section7() {
    return (
        <div className="pb-[100px] pt-10 px-20">
            <h1 className='md:pl-10 pl-[50px] text-[2rem] font-medium pb-5 '>Recent Blog</h1>
            
            <div className='gap-2 md:flex justify-evenly'>
                
            <div className="flex flex-col ">
                <img src={chair11} alt="Nordic Chair" className="rounded-3xl" />
                <p className="mt-4 text-sm font-bold text-center text-zinc-600">First Time Home Owner Ideas</p>
                <p className="text-sm font-bold text-center text-zinc-800">by Kristin Watson on Dec 19, 2021</p>
            </div>
            <div className="flex flex-col ">
                <img src={chair12} alt="Nordic Chair" className="mt-8 rounded-3xl md:mt-0" />
                <p className="mt-4 text-sm font-bold text-center text-zinc-600">How To Keep Your Furniture Clean</p>
                <p className="text-sm font-bold text-center text-zinc-800">by Robert Fox on Dec 15, 2021</p>
            </div>
            <div className="flex flex-col ">
                <img src={chair13} alt="Nordic Chair" className="mt-8 rounded-3xl md:mt-0" />
                <p className="mt-4 text-sm font-bold text-center text-zinc-600">Small Space Furniture Apartment Ideas</p>
                <p className="text-sm font-bold text-center text-zinc-800">by Kristin Watson on Dec 12, 2021</p>
            </div>
            </div>
        </div>
    )
}
