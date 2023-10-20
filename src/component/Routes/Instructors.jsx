import React, { useContext, useEffect, useState } from 'react';
import Instructor from './Instructor';
import { AuthContext } from '../AuthProvider';


const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    const { loading, setLoading } = useState(true)
    useEffect(() => {
        fetch('https://music-school-server-nu.vercel.app/Instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
                setLoading(false)
                

            })

    }, [])
    return (
        <div className='container mx-auto mt-20'>
            <p className=' uppercase text-3xl text-center'>----- Our instructors -----</p>
            <div className='mt-20 gap-7 items-center lg:ml-[7%] '>
                {
                    loading ?(<span className="loading loading-dots loading-lg"></span>) : (<div className=' grid lg:grid-cols-3'>
                        {
                            instructors.map(items => <Instructor
                                key={items._id}
                                items={items}
                            ></Instructor>)
                        }
                    </div>)
                }
            </div>
        </div >
    );
};

export default Instructors;

