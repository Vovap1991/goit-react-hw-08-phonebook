import { ContactForm } from '../Form/Form';
import { Application, FormTitle } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Layout } from 'components/Layout';
import HomePage from 'pages/HomePage/HomePage';
import { RestrictedRoute } from 'components/RestrictedRoute';
import SignInPage from 'pages/SignInPage/SignInPage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/SignInPage"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<SignInPage />}
            />
          }
        />
      </Route>
    </Routes>

    // <Application>
    //   <FormTitle>Phonebook</FormTitle>
    //   <ContactForm></ContactForm>
    //   <hr />
    //   <FormTitle>Contacts</FormTitle>
    //   <Filter />
    //   <ContactList />
    // </Application>
  );
};
