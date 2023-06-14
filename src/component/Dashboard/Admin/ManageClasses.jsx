import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider';
import { stringify } from 'postcss';
import Swal from 'sweetalert2';

const ManageClasses = () => {

    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://music-school-server-nu.vercel.app/classes')
            .then(res => res.json())
            .then(data => {

                // const approvedClass = data.filter(d=>d.status!=='pending'&& d.status!=='deny')
                setClasses(data)
            })

    }, [])

    const handleAccept = (id)=>{
        const updateDoc = {status:'accepted'}
            fetch(`https://music-school-server-nu.vercel.app/addClasses/${id}`,{
                method:'PATCH',
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(updateDoc)
                
            })
            .then(res => res.json())
            .then(data=>{
                console.log(data)
                if (data.modifiedCount>0) {
                        
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class selected successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    

                }

            })
    }

    const handleDeny = (id)=>{
        const updateDoc = {status:'deny'}
            fetch(`https://music-school-server-nu.vercel.app/addClasses/${id}`,{
                method:'PATCH',
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(updateDoc)
                
            })
            .then(res => res.json())
            .then(data=>{
                if (data.modifiedCount>0) {
                        
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class selected successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    

                }

            })
    }



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                              <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available seats</th>
                            <th>price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            classes.map((item, index) => <tr key={item._id}>
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
                                <td>{item.instructor}</td>
                                <td>{item.instructorEmail}</td>
                                <td>{item.seats}</td>
                                <td>{item.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">{item?.status}</button>
                                </th>
                                <th>
                                    <button onClick={()=>handleAccept(item._id)}  disabled={item.status=='accepted'|| item.status=='deny' ?  true : false} className="btn btn-ghost btn-xs">Accept</button><br />
                                    <button onClick={()=>handleDeny(item._id)} disabled={item.status=='accepted'|| item.status=='deny' ?  true : false} className="btn btn-ghost btn-xs">Deny</button><br />
                                    <button className="btn btn-ghost btn-xs">Feedback</button>
                                </th>
                                
                            </tr>
                            )
                        }

                    </tbody>
                    {/* foot */}


                </table>
            </div>
        </div>
    );
};

export default ManageClasses;