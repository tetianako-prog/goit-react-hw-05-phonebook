import React from 'react';
import ContactList from './Contacts/ContactList';
import ContactForm from './Form';
import Filter from './Filter';

const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
