import Header from "Components/Layout/Header";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FunctionComponent<ProtectedRouteProps> = ({
  children,
}) => {
  const token = Cookies.get("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default ProtectedRoute;
