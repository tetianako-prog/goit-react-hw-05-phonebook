import React, { Component } from 'react';
import { v4 } from 'uuid';
import ContactList from './Contacts';
import ContactForm from './Form';
import Filter from './Filter';

class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  // componentDidMount() {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { contacts } = this.state;
  //   if (contacts.length !== prevState.contacts.length) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }

  // addContact = ({ name, number }) => {
  //   const { contacts } = this.state;
  //   const alreadyExists = contacts.find(contact => contact.name === name);
  //   if (alreadyExists) {
  //     alert(`${name} is already in contacts.`);
  //     return;
  //   }
  //   const contact = {
  //     id: v4(),
  //     name,
  //     number,
  //   };
  //   this.setState(({ contacts }) => ({
  //     contacts: [...contacts, contact],
  //   }));
  // };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getVisibleContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  render() {
    //const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    );
  }
}

export default App;
