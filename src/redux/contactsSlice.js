import { createSlice } from '@reduxjs/toolkit';
import { initialStateContacts } from './constants';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  reducers: {
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    addContact(state, action) {
      state.push(action.payload);
    },
    prepare(values) {
      return {
        payload: {
          ...values,
          id: nanoid(),
        },
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
