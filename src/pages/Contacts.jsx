import { useEffect, useState } from 'react';
import {
  Container,
  Title,
  ContcTitle,
  Section,
} from '../components/Phonebook.styled';
import { ContactForm } from '../components/contactForm/ContactForm';
import { Filter } from '../components/filter/Filter';
import { ContactList } from '../components/contactList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/ContactsOperation';

export default function Contacts() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    async function asyncContacts() {
      dispatch(fetchContacts());
    }
    asyncContacts();
  }, [dispatch]);

  return (
    <Container>
      <Section>
        <Title>Phonebook</Title>
        <ContactForm />
        <ContcTitle>Contacts</ContcTitle>
        <Filter changeFilter={setFilter} />
        <ContactList filterValue={filter} />
      </Section>
    </Container>
  );
}
