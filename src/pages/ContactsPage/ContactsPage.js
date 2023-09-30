import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/Form/Form';
import { ContactsPageContainer } from './ContactsPage.styled';

export default function Contacts() {
  return (
    <ContactsPageContainer>
      <ContactForm />
      <Filter />
      <ContactList />
    </ContactsPageContainer>
  );
}
