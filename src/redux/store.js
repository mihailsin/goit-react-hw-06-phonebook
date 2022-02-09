import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setString: (state, action) => {
      return action.payload;
    },
  },
});

export const { add, remove } = itemsSlice.actions;
export const { setString } = filterSlice.actions;

const contactsReducer = combineReducers({
  items: itemsSlice.reducer,
  filter: filterSlice.reducer,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
