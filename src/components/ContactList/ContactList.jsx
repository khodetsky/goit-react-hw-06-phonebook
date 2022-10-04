import { ContactListItem, ContactListStyle, DeleteButton } from './ContactList.styled';
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts, getFilter } from '../../redux/selectors';
import { useSelector } from "react-redux";

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    
    const filteredContacts = () => {
        // const contactsArrey = Object.values(contacts);
        // console.log(contactsArrey)
        return contacts.filter((contact) => contact.name.toLowerCase().includes(filter))
    }

    return (
        <ContactListStyle>
            {filteredContacts().map(({ id, name, number }) => (
                <ContactListItem key={id}>
                    <p>{name}</p>
                    <p>{number}</p>
                    <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>Delete</DeleteButton>
                </ContactListItem>
            ))}
        </ContactListStyle>
    )
}
