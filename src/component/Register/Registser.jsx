import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useContext } from 'react';

import { ImGoogle } from "react-icons/im";
import { AuthContext } from "../AuthProvider";
import register from "../../assets/photos/register.png"
import Swal from "sweetalert2";


const Register = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const from = location.state?.form?.pathname || "/"

    const { user, createUser, logOut, signInWithGoogle, updateUserProfile } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.text.value;
        console.log(email, password, name, photoURL)

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset();
                const saveUser = { name: name, email: email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User sign up successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate(from, {replace:true});
                        }
                    })
                // updateUserProfile(name,photoURL)
                // .then(()=>{

                // })
                // .catch(error=>console.log(error))


            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleRegister = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User sign up successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate('/')
                        }
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero min-h-screen container mx-auto">
            <div className="hero-content flex-col lg:flex-row h-full w-full">
                <div className="text-center lg:text-left w-2/4">

                    <img src={register} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleRegister} >
                        <div className="card-body ">
                            <h1 className="text-3xl font-bold text-center">Register Now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="text" placeholder="photo url" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-sm bg-teal-400 border-none">Register</button>
                            </div>
                            <button onClick={handleGoogleRegister} className='btn btn-outline mt-3 w-full'><span className='mr-3'><ImGoogle></ImGoogle></span>Sign in with Google</button>
                            <p>Already have an account? <Link to="/login" className=" text-teal-800" >Please Login.</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;