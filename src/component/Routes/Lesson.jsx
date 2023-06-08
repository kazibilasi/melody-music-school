import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'
import React from 'react';

const Lesson = ({ c }) => {
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img className=' image-full h-full w-full' src={c.image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{c.name}</h2>
                    <p>Instructor: {c.instructor}</p>
                    <p>Seats: {c.seats}</p>
                    <p>Price: {c.price}</p>
                    <p >
                        <Rating
                            style={{ maxWidth: 80}}
                            value={c.ratings}
                           

                        />
                    </p>
                    <p>{c.ratings}</p>
                    <div className="card-actions justify-end">
                        <button className="btn rounded-3xl bg-teal-400">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lesson;