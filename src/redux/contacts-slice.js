import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchAllContacts.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items = payload;
      })
      .addCase(fetchAllContacts.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchAddContact.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchAddContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteContact.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export const contactReducer = contactSlice.reducer;
