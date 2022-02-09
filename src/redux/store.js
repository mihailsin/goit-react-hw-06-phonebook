import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    add: (state, action) => {
      action.payload.push(state);
    },
    delete: (state, action) => {
      state.value -= 1;
    },
    filter: (state, action) => {
      state.value += action.payload;
    },
  },
});

const store = configureStore({ reducer: {} });

export default store;
