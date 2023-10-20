import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import useAdminHook from '../Common/useAdminHook';


const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    if(user){
        loading
        return children;
        
    }
    return <Navigate to= "/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;
