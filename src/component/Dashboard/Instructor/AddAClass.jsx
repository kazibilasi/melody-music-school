import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import Swal from 'sweetalert2';

const AddAClass = () => {

    const {user}= useContext(AuthContext)
    const name = user.displayName;
    const email = user.email;

    const handleAddAClass = event => {
        event.preventDefault();
        const form = event.target;
        const className = form.name.value;
        const classImage = form.text.value;
        const instructorName = form.instructorName.value;
        const instructorEmail = form.instructorEmail.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;
      
        console.log(classImage, className, instructorEmail, instructorName, availableSeats, price);

        const addItems = { className: className, classImage: classImage, instructorEmail:instructorEmail,instructorName:instructorName, availableSeats: availableSeats,price:price}
        fetch('http://localhost:5000/addClasses',{
            method : 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body : JSON.stringify(addItems)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    

                }
            })
      };
      
    return (
        <div >
            <p className='text-center mb-6 uppercase text-3xl '>----Add A Class----</p>

            
            <form  onSubmit={handleAddAClass}>
                <div className='grid lg:grid-cols-2 gap-x-5 gap-y-3'>
                    <div className="form-control w-full max-w-xs">
                       
                        <input type="text" placeholder="Class Name" name='name' className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        
                        <input type="text" placeholder="Class Image" name='text' className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                       
                        <input type="text" placeholder="Instructor Name" name='instructorName' value={name} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                      
                        <input type="email" placeholder="Instructor Email" name='instructorEmail' value={email} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        
                        <input type="number" placeholder="Available seats" name='availableSeats' className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        
                        <input type="number" placeholder=" Price" name='price' className="input input-bordered w-full max-w-xs" />

                    </div>
                </div>
                <button  type="submit" className='w-full bg-teal-400 mt-5 rounded-3xl'>Add Item</button>

            </form>


        </div>
    );
};

export default AddAClass;