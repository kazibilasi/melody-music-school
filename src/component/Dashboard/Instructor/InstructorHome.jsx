import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';

const InstructorHome = () => {
    const {user}=useContext(AuthContext);
    console.log(user)
    return (
        <div>
            instructor home
        </div>
    );
};

export default InstructorHome;