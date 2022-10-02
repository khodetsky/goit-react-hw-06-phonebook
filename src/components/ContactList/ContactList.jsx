import PropTypes from 'prop-types';
import { ContactListItem, ContactListStyle, DeleteButton } from './ContactList.styled';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from '../../redux/store';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);

    return (
        <ContactListStyle>
            {contacts.map(({ id, name, number }) => (
                <ContactListItem key={id}>
                    <p>{name}</p>
                    <p>{number}</p>
                    <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>Delete</DeleteButton>
                </ContactListItem>
            ))}
        </ContactListStyle>
    )
}

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
//     onDeleteContact: PropTypes.func.isRequired,
// }
