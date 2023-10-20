
import React from 'react';
import useCommon from '../Common/useCommon';
import { AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SelectedClasses = () => {
    const [cart, refetch] = useCommon()
    console.log(cart.length)
    const handleDelete = item => {

        Swal.fire({
            title: 'Are you want to delete?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://music-school-server-nu.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch()


                        }

                    })
            }
        })
    }
    return (
        <div className=' min-w-sm w-full '>
            <p className=' uppercase text-3xl text-center'>Selected Classes:{cart.length}</p>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-teal-400'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>join</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>  <div>
                                    <div className="font-bold">{item.name}</div>

                                </div></td>

                                <td>{item.seats}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">${item.price}</button>

                                </td>
                                <Link to={`/dashboard/payment/${item._id}`}><button className='btn btn-sm mt-5 rounded-3xl'>Enroll now</button></Link>

                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost  btn-lg "><AiFillDelete className=' text-3xl'></AiFillDelete></button>
                                </td>

                            </tr>

                            )
                        }
                    </tbody>


                </table>
            </div>
        </div>

    );
};

export default SelectedClasses;