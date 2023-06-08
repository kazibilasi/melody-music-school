import React, { useEffect, useState } from 'react';
import { ImSortNumericAsc } from 'react-icons/im';
import Instructor from './Instructor';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/Instructors')
            .then(res => res.json())
            .then(data => {
              
              setInstructors(data)
            })

    }, [])
    return (
        <div className='container mx-auto mt-20'>
            <p className=' uppercase text-3xl text-center'>----- Our instructors -----</p>
             <div className='mt-20 grid lg:grid-cols-3 gap-7 items-center lg:ml-[7%] '>
                {
                    instructors.map(items => <Instructor
                    key={items._id}
                    items={items}
                    ></Instructor>)
                }
            </div>
        </div>
    );
};

export default Instructors;