import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { useQuery } from '@tanstack/react-query';

const EnrolledClasses = () => {

    const { user, loading } = useContext(AuthContext)

    const { refetch, isLoading, data: paymentItem = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await fetch('https://music-school-server-nu.vercel.app/payments', {
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
                        <tr className='bg-teal-400'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>

                            <th>Price</th>
                            <th>status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            paymentItem.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>  <div>
                                    <div className="font-bold">{item.name}</div>

                                </div></td>

                                <td>
                                    <button className="btn btn-ghost btn-xs">${item.price}</button>

                                </td>


                                <td>Enrolled Class</td>

                            </tr>

                            )
                        }
                    </tbody>


                </table>
            </div>
        </div>
    )
};

export default EnrolledClasses;