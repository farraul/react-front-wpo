import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children }) {
  const { userInfo } = useSelector((state) => state.user);
  if (!userInfo) return <Navigate to="/login" />;

  return <div>{children}</div>;
}
