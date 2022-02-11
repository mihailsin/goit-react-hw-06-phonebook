import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { persistStore } from 'redux-persist';

const store = configureStore({
  reducer: rootReducer,
});
const persistor = persistStore(store);
export { store, persistor };
