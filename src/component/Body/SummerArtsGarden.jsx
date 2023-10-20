import React from 'react';
import img from '../../assets/photos/child.jpg'

const SummerArtsGarden = () => {
    return (
        <div className='lg:w-3/5 w-4/5 mx-auto mt-[640px] lg:mt-32'>
        
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='lg:w-3/5'><img  src={img} alt="Album" /></figure>
                <div className="card-body lg:w-2/5">
                    <h2 className="card-title">Summer Arts Garden</h2>
                    <p>Musical summer camps offer unique benefits by combining the joy of music with a camp experience. Participants develop musical skills, explore their creativity, and gain performance experience. These camps foster a love for music, enhance teamwork, and provide a platform for self-expression and personal growth..</p>
                    <div className="card-actions justify-center  ">
                        <button className="btn btn-sm rounded-3xl bg-teal-400">Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummerArtsGarden;