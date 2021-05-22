import { createAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const addContact = createAction('contacts/add', ({ name, number }) => {
  return {
    payload: {
      id: v4(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('contacts/delete');

const filterContacts = createAction('contacts/filter');

export default {
  addContact,
  deleteContact,
  filterContacts,
};
