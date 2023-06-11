import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useCommon = () => {

    // const token = localStorage.getItem('access-token');
    const [axiosSecure]= useAxiosSecure()

    const {user,loading}= useContext(AuthContext)

    const { refetch,isLoading, data : cart=[] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data;
        }
        
      })

    return [cart, isLoading, refetch];
};

export default useCommon;