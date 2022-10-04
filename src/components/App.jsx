import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyles';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// Styles for App

const PageHeader = styled.h1`
margin: 20px 0 20px 75px`;

const ContactsHeader = styled.h2`
margin: 20px 0 20px 90px`;


export const App = () => {
  return (
    <>
      <PageHeader>Phonebook</PageHeader>
      <ContactForm />
      <ContactsHeader>Your contacts</ContactsHeader>
      <Filter/>
      <ContactList/>
      <GlobalStyle/>
    </>
  );
};
