import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth-slice';
import { contactReducer } from './contacts/contacts-slice';
import { filterReducer } from './filter-contact/filter-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactReducer,
    filter: filterReducer,
  },
});
