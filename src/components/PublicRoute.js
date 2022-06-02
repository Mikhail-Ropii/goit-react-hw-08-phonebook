import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from './redux/auth/Auth-selectors';

export function PublicRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? <Navigate to="/contacts" /> : children;
}
