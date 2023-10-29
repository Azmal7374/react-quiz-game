import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '../Authentication/AuthContext';

const PrivateRoute = () => {
  const { user } = useAuth();

  return user ? (
    <Routes>
      <Route path="/" element={<Game />} />
    </Routes>
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;