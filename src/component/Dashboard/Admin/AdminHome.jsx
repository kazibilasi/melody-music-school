import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';

const AdminHome = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <p>admin home</p>
        </div>
    );
};

export default AdminHome;