import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useCommon from '../Common/useCommon';
import { AiFillHome, AiOutlineSelect, AiOutlineUser } from "react-icons/ai";
import { GiClassicalKnowledge } from "react-icons/gi";
import useAdminHook from '../Common/useAdminHook';
import useInstructorHook from '../Common/useInstructorHook';
const Dashboard = () => {
    const [cart] = useCommon()
    const [isAdmin] = useAdminHook();
    console.log(isAdmin?.admin)
    const [isInstructor] = useInstructorHook();
    console.log(isInstructor)
    const [isUser, setIsUser] = useState(true)
    useEffect(() => {
        if (isAdmin?.admin || isInstructor?.instructor) {
            setIsUser(false)
        }
    }, [isAdmin?.admin, isInstructor?.instructor])


    return (
        <div className='container mx-auto'>

            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content flex flex-col mt-5 w-22 lg:w-full container w-full items-center justify-center">
                    {/* Page content here */}


                    <label htmlFor="my-drawer-2" className="btn btn-sm bg-teal-400 text-center rounded-3xl drawer-button lg:hidden">All Menu</label>
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 h-full bg-teal-400 text-base-content">
                    

                        {/* Sidebar content here */}
                        <div className='grid grid-cols-1 items-center'>
                        <p className=" w-32 text-center text-xl font-serif mb-8 ml-9">MELODY <br />music school</p>

                            <div>
                                {
                                    isAdmin?.admin && <>
                                        <li><NavLink to="/dashboard/adminHome"><AiOutlineUser></AiOutlineUser>Admin Home</NavLink></li>
                                        <li><NavLink to="/dashboard/manageUsers"><AiOutlineSelect></AiOutlineSelect>Manage User's</NavLink></li>
                                        <li><NavLink to="/dashboard/manageClasses"><GiClassicalKnowledge></GiClassicalKnowledge>Manage Classes</NavLink></li>
                                    </>
                                }
                                {
                                    isInstructor?.instructor && <>
                                        <li><NavLink to="/dashboard/instructorHome"><AiOutlineUser></AiOutlineUser>Instructor Home</NavLink></li>
                                        <li><NavLink to="/dashboard/myClasses"><AiOutlineSelect></AiOutlineSelect>My Classes </NavLink></li>
                                        <li><NavLink to="/dashboard/addAClasses"><GiClassicalKnowledge></GiClassicalKnowledge>Add A Class</NavLink></li>

                                    </>
                                }
                                {
                                    isUser && <>
                                        <li><NavLink to="/dashboard/userHome"><AiOutlineUser></AiOutlineUser>User Home</NavLink></li>
                                        <li><NavLink to="/dashboard/selectedClasses"><AiOutlineSelect></AiOutlineSelect>Selected Classes <span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink></li>
                                        <li><NavLink to="/dashboard/enrolledClasses"><GiClassicalKnowledge></GiClassicalKnowledge>Enrolled Classes</NavLink></li>
                                    </>
                                }
                            </div>
                            <div className="divider"></div>

                            <div className=" w-full border-opacity-50">


                                <li><NavLink to="/"><AiFillHome></AiFillHome>Home</NavLink></li>
                            </div>
                        </div>
                    </ul>


                </div>

            </div>

        </div>
    );
};

export default Dashboard;


