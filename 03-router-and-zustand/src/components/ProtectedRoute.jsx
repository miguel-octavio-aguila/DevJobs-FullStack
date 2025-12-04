import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ children, page }) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? children : <Navigate to={page} />;
};
