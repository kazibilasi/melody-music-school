import React, { useEffect, useState } from 'react';
import Instructor from '../Routes/Instructor';

const TopInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch(' https://music-school-server-nu.vercel.app/Instructors')
            .then(res => res.json())
            .then(data => {
              
              setInstructors(data)
            })

    }, [])
    const TopInstructors = instructors.filter(items=> items.ratings>= 4.5)
    return (
        <div className='container mx-auto mt-20'>
            <p className=' uppercase text-3xl text-center font-serif'>----- Top instructors -----</p>
            <div className=' grid lg:grid-cols-3 gap-2 gap-y-10 mt-10'>

                {
                    TopInstructors.map(items => <div key={items._id} className=" w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={items.image} alt="Shoes" className="rounded-3xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{items.musicInstructorName}</h2>

                            <p>{items.musicInstructorAbout}</p>
                            <p>{items.Email}</p>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TopInstructors;