import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider';

const MyClasses = () => {
    const { user, loading } = useContext(AuthContext)

    const {  data: addClasses = [] } = useQuery({
        queryKey: ['addClasses', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/addClasses?email=${user?.email}`, {
                headers: {
                    
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                }
            })
            return res.json();
        }

    })

   
    return (
        <div>
            {addClasses.length}
        </div>
    );
};

export default MyClasses;