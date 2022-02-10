import { configureStore } from '@reduxjs/toolkit';
import { saveToLocalStorage } from 'localStorage/read-write';
import { rootReducer } from './reducers';

const store = configureStore({
  reducer: rootReducer,
});
store.subscribe(() => saveToLocalStorage(store.getState().contacts.items));

export default store;
