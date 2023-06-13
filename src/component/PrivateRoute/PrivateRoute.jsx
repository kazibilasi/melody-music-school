import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import useAdminHook from '../Common/useAdminHook';


const PrivateRoute = ({children}) => {
    const {user}= useContext(AuthContext)
   
  

    if(user){
        return children;
    }
    return <Navigate to= "/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;
