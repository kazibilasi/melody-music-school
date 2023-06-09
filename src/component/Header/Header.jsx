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
        <div className='lg:h-[800px] h-[200px] ' >
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
                modules={[Autoplay,Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className=' brightness-[0.3] w-full h-[800px]' src="https://w0.peakpx.com/wallpaper/749/729/HD-wallpaper-piano-guitar-musical-instruments-close-up.jpg" alt="" />   <div className=' absolute text-white z-10 top-10 left-[5%] right-[5%] text-center'>
                    <p className=' text-white text-7xl text-center font-serif lg:mt-32'>Welcome to Music School</p>
                    <p className='text-white text-3xl py-3 lg:mt-5 sm:text-center'>"Music expresses that which cannot be put into words and that which cannot remain silent." - Victor Hugo</p>
                    <p className=' text-white text-2xl text-center'>"Where words fail, music speaks." - Hans Christian Andersen</p>
                    <button className='btn btn-sm rounded-3xl mt-5 text-center'>Start Learning</button>
                </div>
                </SwiperSlide>
                <SwiperSlide><img className=' brightness-[0.3] w-full h-[800px]' src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG11c2ljYWwlMjBpbnN0cnVtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />   <div className=' absolute text-white z-10 top-10 left-[5%] right-[5%] text-center'>
                    <p className=' text-white text-7xl text-center font-serif lg:mt-32'>Welcome to Music School</p>
                    <p className='text-white text-3xl py-3  sm:text-center'>"Music expresses that which cannot be put into words and that which cannot remain silent." - Victor Hugo</p>
                    <p className=' text-white text-2xl text-center'>"Where words fail, music speaks." - Hans Christian Andersen</p>
                    <button className='btn btn-sm rounded-3xl mt-5 text-center'>Start Learning</button>
                </div>
                </SwiperSlide>
                <SwiperSlide><img className=' brightness-[0.3] w-full h-[800px]' src="https://support.musicgateway.com/wp-content/uploads/2023/02/Types-Of-Saxophones-scaled.jpg" alt="" />   <div className=' absolute text-white z-10 top-10 left-[5%] right-[5%] text-center'>
                    <p className=' text-white text-7xl text-center font-serif lg:mt-32'>Welcome to Music School</p>
                    <p className='text-white text-3xl py-3  sm:text-center'>"Music expresses that which cannot be put into words and that which cannot remain silent." - Victor Hugo</p>
                    <p className=' text-white text-2xl text-center'>"Where words fail, music speaks." - Hans Christian Andersen</p>
                    <button className='btn btn-sm rounded-3xl mt-5 text-center'>Start Learning</button>
                </div>
                </SwiperSlide>
                <SwiperSlide><img className=' brightness-[0.3] w-full h-[800px]' src="https://dailymusicroll.s3.us-west-2.amazonaws.com/wp-content/uploads/2022/03/21164334/Violin.jpeg" alt="" />   <div className=' absolute text-white z-10 top-10 left-[5%] right-[5%] text-center'>
                    <p className=' text-white text-7xl text-center font-serif lg:mt-32'>Welcome to Music School</p>
                    <p className='text-white text-3xl py-3 sm:text-center'>"Music expresses that which cannot be put into words and that which cannot remain silent." - Victor Hugo</p>
                    <p className=' text-white text-2xl text-center'>"Where words fail, music speaks." - Hans Christian Andersen</p>
                    <button className='btn btn-sm rounded-3xl mt-5 text-center'>Start Learning</button>
                </div>
                </SwiperSlide>

                {/* <SwiperSlide><img className=' brightness-[0.3] w-full h-[800px]' src="https://w0.peakpx.com/wallpaper/749/729/HD-wallpaper-piano-guitar-musical-instruments-close-up.jpg" alt="" /> <p className='text-white text-5xl absolute top-[50%] ml-[10%] mr-[10%]'>"Music is the universal language of mankind." - Henry Wadsworth Longfellow</p></SwiperSlide>

                <SwiperSlide><img className=' brightness-[0.3] w-full h-[800px]' src="https://w0.peakpx.com/wallpaper/749/729/HD-wallpaper-piano-guitar-musical-instruments-close-up.jpg" alt="" /> <p className='text-white text-5xl absolute top-[50%] ml-[10%] mr-[10%]'>"Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything." - Plato</p></SwiperSlide>

                <SwiperSlide><img className=' w-full h-[800px] brightness-[0.3]' src="https://w0.peakpx.com/wallpaper/749/729/HD-wallpaper-piano-guitar-musical-instruments-close-up.jpg" alt="" /> <p className='text-5xl absolute top-[50%] ml-[10%] mr-[10%] text-white'>""Where words leave off, music begins." - Heinrich Heine</p></SwiperSlide> */}


            </Swiper>


        </div>
    );
};

export default Header;




