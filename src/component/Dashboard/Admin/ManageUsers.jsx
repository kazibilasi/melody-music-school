import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
// import useCommon from '../../Common/useCommon';
// import useAxiosSecure from '../../Common/useAxiosSecure';

const ManageUsers = () => {



    // const { data: users = [], refetch } = useQuery(["/users"], async () => {
    //     const res = await fetch('http://localhost:5000/users',{
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('access-token')}`
    //         }
    //     })
    //     return res.json();


    // })

    const { data: users = [] } = useQuery({
        queryKey: ['/users'],

        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                }
            })
            return res.json();
        }
    })





    console.log(users)
    const handleDelete = user => {
        Swal.fire({
            title: 'Are you want to delete?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`, {
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
    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })

    }

    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an instructor`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })

    }
    return (
        <div className='container mx-auto'>
            <p className=' uppercase text-center text-3xl bg-teal-400'>all users:{users.length}</p>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{

                                    user.role === 'admin' ? 'admin' : user.role=== 'instructor' ? 'instructor' : 'student'




                                }</td>
                                <td > 
                                <p> <span  onClick={() => handleDelete(user)} className='btn btn-sm'> <AiFillDelete></AiFillDelete></span> <br /><span onClick={() => handleMakeAdmin(user)}  disabled={user.role=='admin'|| user.role=='instructor' ?  true : false} className='btn btn-sm rounded-3xl'>Make Admin</span> <br /><span   disabled={user.role=='admin'|| user.role=='instructor' ?  true : false} onClick={() => handleMakeInstructor(user)} className='btn btn-sm rounded-3xl'>Make Instructor</span></p>
                                
                               </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;