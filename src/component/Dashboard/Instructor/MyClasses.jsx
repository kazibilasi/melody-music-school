import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider';

const MyClasses = () => {
    const { user, loading } = useContext(AuthContext)

    const { data: addClasses = [] } = useQuery({
        queryKey: ['addClasses', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/addClasses?email=${user?.email}`, {
                headers: {

                    authorization: `bearer ${localStorage.getItem('access-token')}`
                }
            })
            return res.json();
        }

    })


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            addClasses.map((item, index) => <tr key={item._id}>
                                <td>{index+1}</td>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}

                                </td>
                                <td>{item.seats}</td>
                                <td>${item.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">{item.status}</button><br />
                                    
                                </th>
                            </tr>)
                        }
                        {/* row 2 */}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClasses;