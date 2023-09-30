import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { HomePageLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <HomePageLink to="/">Home</HomePageLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
