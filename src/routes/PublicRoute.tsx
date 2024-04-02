import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { APP_ROUTES_PATHS } from './navigations';

export function PublicRoute({ children }: { children?: JSX.Element }) {
  const location = useLocation();
  const from = location.state?.from?.pathname || APP_ROUTES_PATHS;

  // if (isLogged) {
  //   return <Navigate to={from} replace />;
  // }

  return children ?? <Outlet />;
}
