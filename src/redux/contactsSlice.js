import { createSlice } from '@reduxjs/toolkit';

const initialStateContacts = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  reducers: {
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addContact(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = state => state.contacts.items;
