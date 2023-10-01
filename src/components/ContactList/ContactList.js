import { useDispatch, useSelector } from 'react-redux';
import {
  ListItem,
  DeleteContactButton,
  List,
  NoContactsMessage,
} from './ContactList.styled';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { selectVisibleContacts } from 'redux/selectors';
import { useEffect } from 'react';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (contacts.length === 0) {
    return (
      <NoContactsMessage>
        Sorry! No contacts in your phonebook!
      </NoContactsMessage>
    );
  }
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name}:{''} {contact.number}
          <DeleteContactButton
            onClick={() => {
              dispatch(deleteContact(contact.id));
            }}
          >
            Delete
          </DeleteContactButton>
        </ListItem>
      ))}
    </List>
  );
};
