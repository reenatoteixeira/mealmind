import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth.js';

function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
