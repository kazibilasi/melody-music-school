import React, { useEffect, useState } from 'react';

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://music-school-server-nu.vercel.app/classes')
            .then(res => res.json())
            .then(data => {

                setClasses(data)
            })

    }, [])

    const topClasses = classes.filter(items => items.ratings === 4)
    return (
        <div className='container mx-auto mt-24 lg:mt-32 lg:mr-32'>
            <p className='text-center text-3xl uppercase font-serif'>---- Top Classes ----</p>
            <div className=' grid lg:grid-cols-3 gap-2 gap-y-10 mt-10'>

                {
                    topClasses.map(items => <div key={items._id} className=" w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={items.image} alt="Shoes" className="rounded-3xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{items.name}</h2>

                            <p>{items.description}</p>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;