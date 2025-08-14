import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token =
    useSelector((state) => state.auth.token) || localStorage.getItem("token");
  console.log("token = ", token);
  return token ? children : <Navigate to="/login" replace />;
}
