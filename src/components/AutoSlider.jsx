import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slideImage from "../assets/Hero1.png"
import slideImage2 from "../assets/Hero2.png"
import slideImage3 from "../assets/Hero3.png"
import slideImage4 from "../assets/Hero4.png"
const image = [
    {id:1,image:slideImage},
    {id:2,image:slideImage2},
    {id:3,image:slideImage3},
    {id:4,image:slideImage4},

]


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function AutoSlider(
    { images }
) {
    return (
        <div className='h-70vh py-30'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >



                {image.map((el) => (

                    <SwiperSlide><img src={el.image} alt="" /></SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
}
