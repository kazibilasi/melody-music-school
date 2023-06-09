import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';


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
        <li><Link to='/dashboard/userHome'>Dashboard</Link></li>

    </>
    return (
        <div className="navbar bg-teal-400 flex justify-around">
            <div >
                <div className="dropdown z-20 ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow overflow-visible bg-white  rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <a className=" w-32 text-center text-xl font-serif">MELODY <br />music school</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>
            <div >
                {
                    user?.email ? <>


                        <button onClick={handleLogOut} className='btn btn-sm rounded-3xl bg-teal-400 border-none'>Sign Out</button>  <img className="h-[50px] w-[50px] ml-3 rounded-full" src={user.photoURL} alt="" />


                    </> : <Link to="/login" className="btn btn-sm rounded-3xl bg-teal-400 border-none text-xl">Log In</Link >
                }
            </div>
        </div>

    );
};

export default Navbar;