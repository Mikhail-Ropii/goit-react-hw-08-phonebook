import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/Auth-selectors';
import operations from 'redux/auth/Auth-operations';
import { useDispatch } from 'react-redux';
import { ContainMenu, LogOutButton, TextMenu } from './UserMenu.styled';

export function UserMenu() {
  const dispatch = useDispatch();

  const userName = useSelector(authSelectors.getUserName);
  const logOut = () => {
    dispatch(operations.logOut());
  };
  return (
    <ContainMenu>
      <TextMenu>Welcome, {userName}</TextMenu>
      <LogOutButton variant="contained" type="button" onClick={logOut}>
        Log Out
      </LogOutButton>
    </ContainMenu>
  );
}
