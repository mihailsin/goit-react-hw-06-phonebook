import { configureStore } from '@reduxjs/toolkit';
import { saveToLocalStorage } from 'localStorage/read-write';
import { rootReducer } from './reducers';
import throttle from 'lodash.throttle';

const store = configureStore({
  reducer: rootReducer,
});
store.subscribe(
  throttle(() => {
    saveToLocalStorage(store.getState().contacts.items);
  }, 1000)
);

export default store;
