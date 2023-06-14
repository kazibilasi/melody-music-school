import React, { useContext } from 'react';
// import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../AuthProvider';

const Instructor = () => {
    const token = localStorage.getItem('access-token');
    const { user } = useContext(AuthContext)
    // const [axiosSecure] = useAxiosSecure();
    const { data: isInstructor} = useQuery({
        queryKey: ['instructor', user?.email],
      

        queryFn: async () => {
            const res = await fetch(`https://music-school-server-nu.vercel.app/users/instructor/${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                }
            })
            return res.json();
        }
    })
    return [isInstructor];
};

export default Instructor;