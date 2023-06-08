import React from 'react';
import { Link } from 'react-router-dom';

const SummerArtsGarden = () => {
    return (
        <div className='w-3/4 mx-auto mt-10 lg:mt-32'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='lg:w-3/5' src="https://momsdayoututahcounty.com/wp-content/uploads/2018/04/kids-playing-on-grass-laying-down-1024x683.jpeg" alt="Album" /></figure>
                <div className='lg:w-2/5 mx-auto p-8 lg:mt-10 lg:mr-[9%]'>
                    <h2 className='text-3xl '>Summer Arts Garden</h2>
                    <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos commodi nihil esse unde magni. Ipsum magni id recusandae eum quidem.</p>
                    <Link to="/register" className='btn btn-sm bg-teal-400 rounded-2xl text-white mt-5 '>Register now</Link>
                    
                </div>
            </div>
        </div>
    );
};

export default SummerArtsGarden;