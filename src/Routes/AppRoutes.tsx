import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "Components/Providers/ProtectedRoute";
import UnProtectedRoute from "Components/Providers/UnProtectedRoute";
import Login from "Pages/Login/Login";
import Register from "Pages/Register/Register";
import Dashborad from "Pages/Dashborad/Dashborad";

interface AppRoutesProps {}

const AppRoutes: React.FunctionComponent<AppRoutesProps> = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <UnProtectedRoute>
              <Login />
            </UnProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <UnProtectedRoute>
              <Login />
            </UnProtectedRoute>
          }
        />
        <Route
          path="register"
          element={
            <UnProtectedRoute>
              <Register />
            </UnProtectedRoute>
          }
        />
        <Route
          path="dashborad"
          element={
            <ProtectedRoute>
              <Dashborad />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
