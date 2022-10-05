import { Formik } from 'formik';
import { AddForm, AddField, InputLabel, SubmitButton } from './ContactForm.styled';
import {  useSelector, useDispatch } from "react-redux";
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';
import { getContacts } from '../../redux/selectors';
import { filteredContacts } from "../../redux/contactsSlice";



export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const initialValues = {
        name: '',
        number: '',
    };

    return (
        <Formik initialValues={initialValues}
            onSubmit={(values, actions) => {
                const createNewContact = (contacts, data) => {
                    if (filteredContacts(contacts).find(contact => contact.name === data.name)) {
                        alert(`${data.name} is already in contacts`)
                    } else if (data.number.trim() === "" && data.name.trim() === "") {
                        alert(`Enter name and number`)
                    } else if (data.name.trim() === "") {
                        alert(`Сontact must contain a name`)
                    } else if (data.number.trim() === "") {
                        alert(`Сontact must contain a number`)
                    } else {
                        dispatch(addContact({ id: nanoid(), ...data }));
                        actions.resetForm();
                    }
                };

                createNewContact(contacts, values); 
            }}>
            <AddForm>
                <InputLabel >
                    Name
                    <AddField type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"/>
                </InputLabel>
                <InputLabel >
                    Number
                    <AddField type="tel" name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"/>
                </InputLabel>
                <SubmitButton type='submit'>Add contact</SubmitButton>
            </AddForm>
        </Formik>
    );
}

