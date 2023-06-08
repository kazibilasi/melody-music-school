import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Header = () => {

    return (
        <div className='lg:h-[800px] h-[600px]' >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[ Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className=' brightness-[0.3] w-full h-[800px]' src="https://w0.peakpx.com/wallpaper/749/729/HD-wallpaper-piano-guitar-musical-instruments-close-up.jpg" alt="" /> <p className='text-5xl text-white absolute top-[50%] ml-[10%] mr-[10%]'>"Where words fail, music speaks." - Hans Christian Andersen</p></SwiperSlide>

                <SwiperSlide><img className=' brightness-[0.3] w-full h-[800px]' src="https://w0.peakpx.com/wallpaper/749/729/HD-wallpaper-piano-guitar-musical-instruments-close-up.jpg" alt="" /> <p className='text-white text-5xl absolute top-[50%] ml-[10%] mr-[10%]'>"Music is the universal language of mankind." - Henry Wadsworth Longfellow</p></SwiperSlide>

                <SwiperSlide><img className=' brightness-[0.3] w-full h-[800px]' src="https://w0.peakpx.com/wallpaper/749/729/HD-wallpaper-piano-guitar-musical-instruments-close-up.jpg" alt="" /> <p className='text-white text-5xl absolute top-[50%] ml-[10%] mr-[10%]'>"Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything." - Plato</p></SwiperSlide>

                <SwiperSlide><img className=' w-full h-[800px] brightness-[0.3]' src="https://w0.peakpx.com/wallpaper/749/729/HD-wallpaper-piano-guitar-musical-instruments-close-up.jpg" alt="" /> <p className='text-5xl absolute top-[50%] ml-[10%] mr-[10%] text-white'>""Where words leave off, music begins." - Heinrich Heine</p></SwiperSlide>

            
            </Swiper>


        </div>
    );
};

export default Header;




