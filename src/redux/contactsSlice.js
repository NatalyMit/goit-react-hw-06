import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
    addContact: {
      reducer(state, action) {
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
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
