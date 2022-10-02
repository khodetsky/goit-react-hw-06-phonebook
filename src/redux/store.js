import { configureStore } from "@reduxjs/toolkit";
import { createReducer, createAction } from "@reduxjs/toolkit";
import { createNewContact } from '../components/ContactForm/ContactForm';

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
// console.log([addContact]);


const contactsReduser = createReducer([
    {
        id: 123,
        name: 'cat',
        number: 123123
    },
    {
        id: 567,
        name: 'rat',
        number: 3426346
    },
    {
        id: 789,
        name: 'dog',
        number: 456568
    }
], {
    [addContact]: (state, action) => {
        state.push(createNewContact(state, action.payload))
    },
    [deleteContact]: (state, action) =>{
        return state.filter(contact => contact.id !== action.payload)
    }
});

export const store = configureStore({
    reducer: {
      contacts: contactsReduser
    },
});