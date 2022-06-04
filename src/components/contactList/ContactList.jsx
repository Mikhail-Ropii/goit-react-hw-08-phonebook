import { ContactItem } from '../contactItem/ContactItem';
import { BookItem, DeleteButton } from './ContactList.styled';
import { useContacts } from '../../redux/Contacts-slice';
import { useMemo } from 'react';

export const ContactList = ({ filterValue }) => {
  const { contacts, deleteContact } = useContacts();

  const findContact = useMemo(() => {
    return (
      contacts?.filter(contact =>
        contact.name
          .toLowerCase()
          .trim()
          .includes(filterValue.toLowerCase().trim())
      ) ?? []
    );
  }, [contacts, filterValue]);

  const handleDeleteContact = id => {
    deleteContact(id);
  };

  return (
    <ul>
      {findContact.map(({ id, name, number }) => (
        <BookItem key={id}>
          <ContactItem name={name} number={number} />
          <DeleteButton
            variant="contained"
            type="button"
            onClick={() => handleDeleteContact(id)}
          >
            Delete
          </DeleteButton>
        </BookItem>
      ))}
    </ul>
  );
};
