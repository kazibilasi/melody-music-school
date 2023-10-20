import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { HiMusicNote } from "react-icons/hi";




const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const navbar = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>

    </>
    return (
        <div className="navbar bg-teal-400 flex justify-between">
            <div >
                <div className="dropdown z-20 ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow overflow-visible bg-white  rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <p className=" text-center flex justify-center items-center text-xl lg:ml-3 font-serif"><HiMusicNote className='text-4xl mr-3'></HiMusicNote>MELODY <br />music school</p>
            </div>
            <div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" gap-x-5 menu-horizontal uppercase font-semibold text-lg px-1">
                        {navbar}
                    </ul>

                </div>
                <div className='lg:mr-4'>
                    {
                        user?.email ? <>
                            <div className='flex justify-center items-center'>
                                <button onClick={handleLogOut} className='btn btn-sm rounded-3xl text-xl bg-teal-400 border-none'>Sign Out</button>  <img className="h-[50px] w-[50px] ml-3 rounded-full" onMouseMove={user.displayName} src={user.photoURL} alt="" />
                            </div>

                        </> : <Link to="/login" className="btn btn-sm rounded-3xl bg-teal-400 border-none text-xl">Log In</Link >
                    }
                </div>
            </div>


        </div>

    );
};

export default Navbar;