import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';

const ManageClasses = () => {

    const { user, loading } = useContext(AuthContext)

    const { refetch, isLoading, data: addClasses = [] } = useQuery({
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
            <p>{addClasses.length}</p>
        </div>
    );
};

export default ManageClasses;