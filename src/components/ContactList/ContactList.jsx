import { ContactListItem, ContactListStyle, DeleteButton } from './ContactList.styled';
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts, getFilter } from '../../redux/selectors';
import { useSelector } from "react-redux";
import { filteredContacts } from "../../redux/contactsSlice";

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    return (
        <ContactListStyle>
            {filteredContacts(contacts, filter).map(({ id, name, number }) => (
                <ContactListItem key={id}>
                    <p>{name}</p>
                    <p>{number}</p>
                    <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>Delete</DeleteButton>
                </ContactListItem>
            ))}
        </ContactListStyle>
    )
}
