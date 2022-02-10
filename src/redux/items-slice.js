import { readFromLocalStorage } from 'localStorage/read-write';
import { createSlice } from '@reduxjs/toolkit';

const persistedContactsItems = readFromLocalStorage();

export const itemsSlice = createSlice({
  name: 'items',
  initialState: persistedContactsItems,
  reducers: {
    add: (state, { payload }) => {
      const existingItems = state.map(item => item.name.toLowerCase());
      if (existingItems.includes(payload.name.toLowerCase())) {
        alert(`${payload.name} is already in contacts`);
      } else {
        state.push(payload);
      }
    },
    remove: (state, { payload }) => {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const { add, remove } = itemsSlice.actions;
