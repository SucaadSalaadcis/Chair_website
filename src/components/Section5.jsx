import React from 'react'
import chair from '../assets/img/chairs/chair.png'
import chair8 from '../assets/img/chairs/chair8.png'
import chair7 from '../assets/img/chairs/chair7.png'

export default function Section5() {
    return (
        <div className='px-10 mb-32 leading-6 md:px-32 md:flex md:pt-28'>
            <div className="flex">
                <img src={chair} alt="Nordic Chair" className="w-40 h-40" />
                <div className='flex flex-col mt-10 ml-4'>
                    <p className="mt-4 text-sm font-bold text-zinc-800">Nordic Chair</p>
                    <p className="mt-1 text-sm text-zinc-400">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                    <p className='mt-2'>Read More</p>
                </div>
            </div>
            <div className="flex">
                <img src={chair8} alt="Nordic Chair" className="w-40 h-40" />
                <div className='flex flex-col mt-10'>
                    <p className="mt-4 text-sm font-bold text-zinc-800 ">Kruzo Aero Chair</p>
                    <p className="mt-1 text-sm text-zinc-400">Donec facilisis quam ut purus  rutrum lobortis. Donec vitae odio</p>
                    <p className='mt-2'>Read More</p>
                </div>
            </div>
            <div className="flex">
                <img src={chair7} alt="Nordic Chair" className="w-40 h-40" />
                <div className='flex flex-col mt-10'>
                    <p className="mt-4 text-sm font-bold text-zinc-800">Ergonomic Chair</p>
                    <p className="mt-1 text-sm text-zinc-400">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                    <p className='mt-2'>Read More</p>
                </div>
            </div>
        </div>
    )
}
