import React, { useEffect, useState } from 'react';
import Lesson from './Lesson';


const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {

                setClasses(data)
            })

    }, [])
    return (
        <div className='container mx-auto '>
            <div className='mt-20 grid lg:grid-cols-3 gap-7 items-center lg:ml-[7%] '>
                {
                    classes.map(item => <Lesson
                        key={item._id}
                        item={item}
                    ></Lesson>)
                }
            </div>
        </div>

    );
};

export default Classes;