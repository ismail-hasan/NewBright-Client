import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../ContextProvider/ContextProvider';

const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const location = useLocation()
    if (loading) {
        return <h1>loading ......</h1>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PrivetRouter;