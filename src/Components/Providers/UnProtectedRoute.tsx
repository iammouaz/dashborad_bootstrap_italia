import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

interface UnProtectedRouteProps {
   children : JSX.Element
}

const UnProtectedRoute: React.FunctionComponent<UnProtectedRouteProps> = ({
   children
}) => {
   const token = Cookies.get('token')

   if (token) {
      return <Navigate to="/dashborad" replace />
   }

   return <>{children}</>
}
export default UnProtectedRoute
