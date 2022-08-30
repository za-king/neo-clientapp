
import {Navigate,Outlet} from'react-router-dom'

import Cookies from 'universal-cookie';
const cookies = new Cookies();
 const ProtectedRoute = ({ children }) => {
  const auth = cookies.get('token2')
  

    if (!auth ) {
      return <Navigate to="/login" replace />;
    }
  
    return children ? children : <Outlet />;
  };

  export default ProtectedRoute