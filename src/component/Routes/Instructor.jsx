import React from 'react';
import { motion } from "framer-motion";
import { Rating } from '@smastrom/react-rating';

const Instructor = ({ items }) => {
    return (
        <div>
            <motion.div
                className="container"
                whileHover={{ scale: 1.1, rotate: 360 }}
               
            >

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={items.image} alt="Shoes" className="rounded-xl w-[300px] h-[300px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{items.musicInstructorName}</h2>
                        <p>{items.musicInstructorAbout}</p>
                        <Rating
                                style={{ maxWidth: 110 }}
                                value={items.ratings}


                            />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Instructor;