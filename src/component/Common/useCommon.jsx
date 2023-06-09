import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useCommon = () => {

    const {user}= useContext(AuthContext)
    const { refetch,isLoading, data : cart=[] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json()
        }
        
      })

    return [cart, isLoading, refetch];
};

export default useCommon;