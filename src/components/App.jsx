import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import operations from './redux/auth/Auth-operations';
import { PrivatRoute } from './PrivatRoute';
import { PublicRoute } from './PublicRoute';
import authSelectors from './redux/auth/Auth-selectors';

const Layout = lazy(() => import('../pages/Layout'));
const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export function App() {
  const isRefreshingUser = useSelector(authSelectors.getIsRefreshingUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.refreshUser());
  }, [dispatch]);

  return (
    !isRefreshingUser && (
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route
              path="register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="contacts"
              element={
                <PrivatRoute>
                  <Contacts />
                </PrivatRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    )
  );
}
