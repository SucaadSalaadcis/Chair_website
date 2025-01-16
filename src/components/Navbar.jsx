import React from 'react'
import { LuUser } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import sofa from '../assets/img/chairs/sofa5.png'


export default function Navbar() {

    const navbarText = ['Home', 'About us', 'Services', 'Blog', 'Contact Us'];

    return (
        <div className='bg-[#3B5D4F] h-[550px]'>
            {/* navbar div */}
            <div className='flex justify-between p-5 px-5 text-white md:px-32'>
                <h1 className='mt-10 text-xl font-bold md:text-3xl md:mt-0'>Furni<span className='text-gray-400'>.</span></h1>

                <div className='flex justify-between gap-9 '>
                    <ul className='hidden gap-10 mt-3 font-sans font-medium text-gray-400 md:flex '>
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
            <div className='gap-5 pt-10 pl-5 text-white md:justify-between md:flex md:pt-24 md:pl-32'>
                {/* left text  */}
                <div className='md:mt-15'>
                    <h1 className='font-bold text-lg md:text-[2.5rem]  '>Modern Interior Design <p className='md:mt-5'>Studio.</p></h1>
                    <p className='md:mt-7 mt-3 md:text-[15px] text-gray-400'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet <br /> velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                    <button className='p-3 font-bold text-gray-800 bg-yellow-400 rounded-full md:mt-5 md:px-6'>Shop Now</button>
                    <button className='p-2.5 ml-3 font-bold border-2 rounded-full md:px-7 mt-7 '>Explore</button>
                </div>
                {/* right img */}
                <div className=''>
                    <img className='' src={sofa} alt="" />
                </div>
            </div>

        </div>
    )
}
