import { createAsyncThunk } from '@reduxjs/toolkit';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { getAllContacts, addContact, deleteContact } from 'api/contacts-api';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const result = await addContact(data);
      Notify.success(`${data.name} successfully added to the phonebook !`);
      return result;
    } catch ({ response }) {
      Notify.failure(`${data.name} failed to add to phonebook`);
      return thunkAPI.rejectWithValue(response.data.message);
    }
  },
  {
    condition: ({ name, phone }, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toLowerCase()?.trim();
      const normalizedNumber = phone.toString()?.trim();
      const result = contacts.items.find(({ name, number }) => {
        return (
          name.toLowerCase() === normalizedName || number === normalizedNumber
        );
      });
      if (result) {
        Notify.info(`${name} is already in contacts`);
        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await deleteContact(id);
      return id;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);
