import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import {
  UserMenuWrapper,
  UserMenuTitle,
  UserMenuLogOutButton,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrapper>
      <UserMenuTitle>Welcome, {user.name}!</UserMenuTitle>
      <UserMenuLogOutButton type="button" onClick={() => dispatch(logOut())}>
        Log out
      </UserMenuLogOutButton>
    </UserMenuWrapper>
  );
};
