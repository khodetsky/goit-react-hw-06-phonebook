import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
        // [
        // {
        //     id: 123,
        //     name: 'cat',
        //     number: 123123
        // },
        // {
        //     id: 567,
        //     name: 'rat',
        //     number: 3426346
        // },
        // {
        //     id: 789,
        //     name: 'dog',
        //     number: 456568
        // }],
    reducers: {
        addContact(state, action) {
            state.push(action.payload)
        },
        deleteContact(state, action) {
            return state.filter(contact => contact.id !== action.payload)
        }
    }
});

const persistConfig = {
    key: 'contacts',
    storage,
};

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact } = contactsSlice.actions;