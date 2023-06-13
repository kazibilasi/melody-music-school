import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import Common from '../Common/useCommon';
import useCommon from '../Common/useCommon';


const Lesson = ({ item }) => {
    const { user } = useContext(AuthContext)
    const [refetch] = useCommon()
        const navigate = useNavigate()
        const location = useLocation()
    

    const handleAddToSelect = (item) => {
        const {_id, name, price, seats, instructor,image} = item
        
        
        if (user && user.email) {
            const selectItems = {selectItemsId: _id , name,seats, instructor, image, price, email: user.email}
            fetch('https://music-school-server-nu.vercel.app/carts',{
                method : 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body : JSON.stringify(selectItems)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class selected successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        refetch();

                    }
                })
        }
        else{
            Swal.fire({
                title: 'Please login to select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/login", {state : {from:location}})
                }
              })
        }
    }
   
    return (
        <div>
            <div  className="card w-96 glass">
                <figure><img className=' image-full h-full w-full' src={item.image} alt="car!" /></figure>
                <div className="card-body text-xl">
                    <h2 className="card-title">{item.name}</h2>
                    <p>Instructor: {item.instructor}</p>
                    <p>Seats: {item.seats}</p>
                    <p>Price: {item.price}</p>
                    <p >
                        <Rating
                            style={{ maxWidth: 110 }}
                            value={item.ratings}


                        />
                    </p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToSelect(item)} className="badge bg-teal-400 text-white border-none p-4  badge-outline">Select</button>
                        <button className="badge bg-teal-400 text-white border-none p-4 badge-outline">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lesson;