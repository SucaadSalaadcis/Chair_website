import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './section6.css';

// import required modules
import { Navigation } from 'swiper/modules';

import sofa3 from '../assets/img/chairs/sofa5.png'
import sofa2 from '../assets/img/chairs/sofa11.png'
import sofa4 from '../assets/img/chairs/sofa12.png'

export default function Section6() {
    return (
        <div className="pb-[100px] md:pt-20 pt-10 text-center">
            <h1 className="text-4xl font-semibold text-zinc-700">Testimonials</h1>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide><img src={sofa3}  alt="" /><p className='hidden md:block'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p> </SwiperSlide>
                    <SwiperSlide><img src={sofa2} alt="" /><p className='hidden md:block'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p></SwiperSlide>
                    <SwiperSlide><img src={sofa4} alt="" /><p className='hidden md:block'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p></SwiperSlide>
                </Swiper>
            </div>
        </div>

    )
}