import { combineReducers } from 'redux';
import { itemsSlice } from './items-slice';
import { filterSlice } from './filter-slice';

const contactsReducer = combineReducers({
  items: itemsSlice.reducer,
  filter: filterSlice.reducer,
});

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});
