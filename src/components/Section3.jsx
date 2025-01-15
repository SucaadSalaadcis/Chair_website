import React from 'react'
import chair9 from '../assets/img/chairs/chair9.jpg'
import { TbCar } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { LuArrowRightLeft } from "react-icons/lu";


export default function Section3() {
    return (
        <div className='flex gap-32 mb-32 px-28 justify-evenly'>
            
            {/* left */}
            <div className='flex justify-center'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-bold text-zinc-800'>Why Choose Us</h1>
                    <p className='mt-3 text-gray-500'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam <br />vulputate velit imperdiet dolor tempor tristique.</p>

                    {/* the 4 icons */}
                    <div className='mt-10'>
                        {/* the top 2 */}
                        <div className='flex justify-between'>
                            <div>
                                <TbCar className='text-5xl text-zinc-700' />
                                <p className='mt-2 font-semibold text-zinc-800'>Fast & Free Shipping</p>
                                <p className='mt-2 text-gray-500'>Donec vitae odio quis nisl dapibus <br /> malesuada. Nullam ac aliquet velit.<br /> Aliquam vulputate.</p>
                            </div>
                            <div className='mt-3'>
                                <FiShoppingBag className='text-4xl text-zinc-700' />
                                <p className='mt-2 font-semibold text-zinc-800'>Easy to Shop</p>
                                <p className='mt-2 text-gray-500'>Donec vitae odio quis nisl dapibus <br /> malesuada. Nullam ac aliquet velit.<br /> Aliquam vulputate.</p>
                            </div>
                        </div>
                        {/* the last 2 */}
                        <div className='flex justify-between mt-5'>
                            <div>
                                <HiOutlineSupport className='text-5xl text-zinc-700' />
                                <p className='mt-2 font-semibold text-zinc-800'>24/7 Support</p>
                                <p className='mt-2 text-gray-500'>Donec vitae odio quis nisl dapibus <br /> malesuada. Nullam ac aliquet velit.<br /> Aliquam vulputate.</p>
                            </div>
                            <div className='mt-3'>
                                <LuArrowRightLeft className='text-4xl text-zinc-700' />
                                <p className='mt-2 font-semibold text-zinc-800'>Hassle Free Returns</p>
                                <p className='mt-2 text-gray-500'>Donec vitae odio quis nisl dapibus <br /> malesuada. Nullam ac aliquet velit.<br /> Aliquam vulputate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* right */}
            <div>
                <img src={chair9} className='rounded-3xl' alt="" />
            </div>
        </div>
    )
}
