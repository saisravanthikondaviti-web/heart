// src/components/ProtectedRoute.js

import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../firebase";

function ProtectedRoute({ children }) {
  const user = auth.currentUser;
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;