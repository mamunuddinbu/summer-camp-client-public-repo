import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthProvider';
import { useLocation, Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log('user in private route', user);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;
