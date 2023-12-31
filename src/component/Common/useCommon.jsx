import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from './useAxiosSecure';

const useCommon = () => {

    
    // const [axiosSecure]= useAxiosSecure()

    const {user,loading}= useContext(AuthContext)

    const { refetch,isLoading, data : cart=[] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled:!loading && !!user?.email,
        queryFn: async () => {
            const res = await fetch(`https://music-school-server-nu.vercel.app/carts?email=${user?.email}`,{
                headers:{
                    authorization : `bearer ${localStorage.getItem('access-token')}`
                }
            })
            return res.json();
        }
        
      })

    return [cart, isLoading, refetch];
};

export default useCommon;