import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const userId = useSelector((state) => state.user?.user?._id || null);

  if (!userId) {
    return children; // render whatever children components you passed
  }
  
  return <Navigate to="/home" replace />;
};

export default PublicRoute;
