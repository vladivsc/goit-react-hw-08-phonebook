import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter-slice';
import { contactReducer } from './contacts-slice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
