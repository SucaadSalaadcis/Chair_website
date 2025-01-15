import React from 'react'
import { LuUser } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import sofa from '../assets/img/chairs/sofa5.png'


export default function Navbar() {

    const navbarText = ['Home', 'About us', 'Services', 'Blog', 'Contact Us'];

    return (
        <div className='bg-[#3B5D4F] h-[550px]'>
            {/* navbar div */}
            <div className='flex justify-between p-3 px-32 text-white'>
                <h1 className='text-3xl font-bold'>Furni<span className='text-gray-400'>.</span></h1>

                <div className='flex justify-between gap-9 '>
                    <ul className='flex gap-10 mt-3 font-sans font-medium text-gray-400'>
                        {
                            navbarText.map((text) => (
                                <li>{text}</li>
                            ))
                        }
                    </ul>
                    {/* icons */}
                    <div className='flex gap-5 mt-3 ml-4 text-xl'>
                        <LuUser />
                        <MdOutlineShoppingCart />
                    </div>
                </div>
            </div>

            {/* section 2 */}
            <div className='flex justify-between gap-5 pt-24 pl-32 text-white'>
                {/* left text  */}
                <div className='mt-15'>
                    <h1 className='font-bold text-[2.5rem] '>Modern Interior Design  Studio.</h1>
                    <p className='mt-7 text-[15px] text-gray-400'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet <br /> velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                    <button className='p-3 px-6 mt-5 font-bold text-gray-800 bg-yellow-400 rounded-full'>Shop Now</button>
                    <button className='p-2.5 ml-3 font-bold border-2 rounded-full px-7 mt-7 '>Explore</button>
                </div>
                {/* right img */}
                <div className=''>
                    <img className='' src={sofa} alt="" />
                </div>
            </div>

        </div>
    )
}
