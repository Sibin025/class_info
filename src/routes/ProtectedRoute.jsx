import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
  const { isUseLoggedIn } = useSelector((store)=> store?.userData);
  if (!isUseLoggedIn) {
    // If user is not authenticated, redirect to the login page
    return <Navigate to="/login" replace />;
  }
  
  // If authenticated, render the children (protected component)
  return children;
};

export default ProtectedRoute;
