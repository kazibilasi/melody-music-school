import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';

const InstructorHome = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
        </div>
    );
};

export default InstructorHome;