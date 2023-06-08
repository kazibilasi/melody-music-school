import React from 'react';

const Instructor = ({ items }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={items.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{items.musicInstructorName}</h2>
                    <p>{items.musicInstructorAbout}</p>
                    <p>Ratings:{items.ratings}</p>
                </div>
            </div>
        </div>
    );
};

export default Instructor;