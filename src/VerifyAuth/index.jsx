import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const VerifyAuth = (props) => {
    const { isAuthenticated } = useSelector((state) => state.Auth);
    return isAuthenticated ? (
      <>{props.children}</>
    ) : (
      <Navigate to="/Login" replace/>
    );
}

export default VerifyAuth;