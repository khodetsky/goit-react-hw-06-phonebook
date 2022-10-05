import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

//* Normalize for state with redux-persist

export const filteredContacts = (contacts, filter) => {
    const contactsArrey = Object.values(contacts);
    contactsArrey.pop();
    if (!filter) {
        return contactsArrey;
    }
    return contactsArrey.filter((contact) => contact.name.toLowerCase().includes(filter))
};

const findContactForDelete = (dataObj, searchValue) => {
     if (Object.keys(dataObj).includes(searchValue)) {
         return searchValue;
    }
}

//*

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact(state, action) {
            state[action.payload.id] = action.payload;
        },
        deleteContact(state, action) {
           delete state[findContactForDelete(state, action.payload)]
        }
    }
});

const persistConfig = {
    key: 'contacts',
    storage,
};

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact } = contactsSlice.actions;