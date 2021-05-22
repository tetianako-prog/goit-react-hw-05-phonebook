import { combineReducers } from 'redux';
import actions from './phonebook-actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = createReducer([...initialState], {
  [actions.addContact]: (state, { payload }) => {
    const isInContacts = state.some(contact => contact.name === payload.name);
    if (!isInContacts) {
      return [...state, payload];
    }
    alert(`${payload.name} is already in contacts`);
    return state;
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [actions.filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
