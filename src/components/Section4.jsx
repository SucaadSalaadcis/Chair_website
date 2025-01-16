import React from 'react'
import chair9 from '../assets/img/chairs/sofa8.jpg'
import chair10 from '../assets/img/chairs/chair10.jpg'
import sofa10 from '../assets/img/chairs/sofa10.jpg'
import { FaRegCircle } from "react-icons/fa";

export default function Section4() {
    return (
        <div className='justify-between gap-32 px-20 mb-32 leading-6 md:flex md:pt-28'>

            {/* left */}
            <div className="relative w-3/5">
                <div className='flex gap-5'>
                    {/* Front Image */}
                    <img
                        width='70%'
                        src={sofa10}
                        className="relative -z-10 rounded-3xl"
                        alt=""
                    />
                    {/* Front Image */}
                    <img
                        src={chair9}
                        className="relative h-48 w- 48-z-10 rounded-3xl"
                        alt=""
                    />

                </div>
                {/* Back Image */}
                <img
                    src={chair10}
                    width="300px"
                    className="absolute z-10 md:top-[227px] hidden md:block top-[410%] md:left-[320px] rounded-3xl"
                    alt=""
                />
            </div>



            {/* right */}
            <div className='md:w-2/5'>
                <div className='flex flex-col'>
                    <h1 className='mt-10 text-lg font-semibold md:text-3xl md:mt-0 text-zinc-800'>We Help You Make Modern Interior Design</h1>
                    <p className='mt-10 text-gray-500 '>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

                    {/* the 4 icons */}
                    <div className='mt-5'>
                        {/* the top 2 */}
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <FaRegCircle className='mt-3 mr-2 text-sm font-bold ' />
                                <p className='mt-2 text-gray-500'>Donec vitae odio quis nisl dapibus malesuada</p>
                            </div>
                            <div className='flex'>
                                <FaRegCircle className='mt-3 mr-2 text-sm font-bold' />
                                <p className='mt-2 text-gray-500'>Donec vitae odio quis nisl dapibus malesuada</p>
                            </div>
                        </div>
                        {/* the last 2 */}
                        <div className='flex justify-between mt-5'>
                            <div className='flex'>
                                <FaRegCircle className='mt-3 mr-2 text-sm font-bold' />
                                <p className='mt-2 text-gray-500'>Donec vitae odio quis nisl dapibus malesuada</p>
                            </div>
                            <div className='flex'>
                                <FaRegCircle className='mt-3 mr-2 text-sm font-bold' />
                                <p className='mt-2 text-gray-500'>Donec vitae odio quis nisl dapibus malesuada</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='p-3 px-8 mt-5 font-bold text-white rounded-full bg-zinc-800'>Explore</button>
            </div>

        </div>
    )
}
