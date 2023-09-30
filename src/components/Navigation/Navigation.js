import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { HomePageLink, ContactsLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <HomePageLink to="/">Home</HomePageLink>
      {isLoggedIn && <ContactsLink to="/contacts">Contacts</ContactsLink>}
    </nav>
  );
};
