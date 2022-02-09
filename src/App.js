import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, setString } from 'redux/store';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

import './App.css';
import { Grid, GridContainer } from './App.styled';

const App = () => {
  const filterValue = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  // const savedContacts = localStorage.getItem('contacts');
  // const parsedContacts = JSON.parse(savedContacts);

  // const [contacts, setContacts] = useState(() => {
  //   return parsedContacts ?? [];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const filterInputHandler = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getContactNames = () => {
  //   return contacts.map(contact => contact.name.toLowerCase());
  // };

  // const handleSubmittedData = contact => {
  //   const existingNames = getContactNames();

  //   if (existingNames.includes(contact.name.toLowerCase())) {
  //     alert(`${contact.name} is already in contacts`);
  //   } else {
  //     setContacts([contact, ...contacts]);
  //   }
  // };

  const filterContacts = () => {
    const normalizedContacts = filterValue.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts)
    );
  };
  const filteredContacts = filterContacts();
  // const deleteContact = id => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // };

  return (
    <Grid>
      <GridContainer>
        <h1>Phonebook</h1>
        <ContactForm addContact={contact => dispatch(add(contact))} />
      </GridContainer>

      <GridContainer>
        <h2>Contacts</h2>
        <Filter
          value={filterValue}
          inputHandler={e => dispatch(setString(e.target.value))}
        />
        <ContactList contacts={filteredContacts} />
      </GridContainer>
    </Grid>
  );
};

export default App;
