import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const useAdminHook = () => {
    const token = localStorage.getItem('access-token');
    const { user } = useContext(AuthContext)
    // const [axiosSecure]= useAxiosSecure();
    const { data: isAdmin } = useQuery({
        queryKey: ['admin', user?.email],

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                }
            })
            return res.json();
        }
    })
    return [isAdmin];
};

export default useAdminHook;