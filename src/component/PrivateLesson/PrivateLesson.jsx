import React from 'react';

const PrivateLesson = () => {
    return (
        <div className= ' bg-teal-400'>
            <div className='lg:flex gap-16 justify-center items-center p-10'>
                <div>
                    <p className='text-white text-4xl'>Private Lesson</p>
                </div>
                <div>
                    <p className=' text-white text-xl'>
                        We Offer Music Education for individuals fo just about every <br />stage and skill level.
                    </p>
                </div>
                <div>
                <button className='btn btn-sm rounded-3xl mt-5'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default PrivateLesson;