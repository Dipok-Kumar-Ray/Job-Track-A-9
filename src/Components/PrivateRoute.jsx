import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    console.log(user);
    //active user to return children
    if(user && user?.email){

        return children;
    }
    //inactive user to navigate in login
    return <Navigate to='/companies'></Navigate>
};

export default PrivateRoute;