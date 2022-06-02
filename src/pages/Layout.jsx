import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/navigation/Navigation';
import { AuthNav } from 'components/authNav/AuthNav';
import { UserMenu } from 'components/userMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'components/redux/auth/Auth-selectors';
import { ContainerNav } from 'components/styled/Layout.styled';

export default function Layout() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <ContainerNav>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </ContainerNav>
      <Outlet></Outlet>
    </>
  );
}
