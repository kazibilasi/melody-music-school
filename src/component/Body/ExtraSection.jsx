import React from 'react';

const ExtraSection = () => {
    return (
        <div className=' relative mt-14' >

            <img className='w-full brightness-[0.3]  h-[500px]' src="https://w0.peakpx.com/wallpaper/749/729/HD-wallpaper-piano-guitar-musical-instruments-close-up.jpg" alt="" />
            {/* <p className='absolute text-white top-[5%] lg:top-[25%] lg:left-[12%] w-3/4 mx-auto p-10 text-center  '>
                    <p className='text-white text-3xl py-3 mt-10 sm:text-center'>"Music expresses that which cannot be put into words and that which cannot remain silent." - Victor Hugo</p>
                    <p className=' text-white text-2xl'>"Where words fail, music speaks." - Hans Christian Andersen</p>
                    <button className='btn btn-sm rounded-3xl mt-5'>Start Learning</button>

                </p> */}
            <div className=' absolute text-white z-10 top-10 left-[5%] right-[5%] text-center'>
                <p className='text-white text-3xl py-3 mt-10 sm:text-center'>"Music expresses that which cannot be put into words and that which cannot remain silent." - Victor Hugo</p>
                <p className=' text-white text-2xl text-center '>"Where words fail, music speaks." - Hans Christian Andersen</p>
                <button className='btn btn-sm rounded-3xl mt-5 text-center'>Start Learning</button>
            </div>

        </div>
    );
};

export default ExtraSection;