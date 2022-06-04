import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from './ContactsOperation';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {},
    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.error = action.payload;
    },
    [addContact.pending](state, action) {},
    [addContact.fulfilled](state, action) {
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.error = action.payload;
    },
    [deleteContact.pending](state, action) {},
    [deleteContact.fulfilled](state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    [deleteContact.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export default contactsSlice.reducer;

//Selectors
const getContacts = state => state.contacts.items;

//Hooks
export const useContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const addNewContact = newContact => dispatch(addContact(newContact));
  const deleteContactById = id => dispatch(deleteContact(id));

  return {
    contacts,
    addNewContact,
    deleteContact: deleteContactById,
  };
};
