import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from './redux/items-slice';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

import './App.css';
import { Grid, GridContainer } from './App.styled';

const App = () => {
  const filterValue = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
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

  return (
    <Grid>
      <GridContainer>
        <h1>Phonebook</h1>
        <ContactForm addContact={contact => dispatch(add(contact))} />
      </GridContainer>

      <GridContainer>
        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={filteredContacts} />
      </GridContainer>
    </Grid>
  );
};

export default App;
