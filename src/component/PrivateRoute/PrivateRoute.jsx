import React, { Children, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const PrivateRoute = () => {
    const {user}= useContext(AuthContext)

    if(user){
        return Children;
    }
    return <Navigate to= "/login" replace={true}></Navigate>
};

export default PrivateRoute;
