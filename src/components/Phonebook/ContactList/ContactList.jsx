import { useSelector } from 'react-redux';
import { Text } from '@chakra-ui/react';

import { getContacts, getFilter } from 'redux/selectors';
import ContactItem from './ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterContacts = getFilteredContacts();

  return (
    <>
      {contacts.length === 0 ? (
        <Text textAlign="center">
          <b>Contacts list is empty!</b>
        </Text>
      ) : (
        filterContacts.map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })
      )}
    </>
  );
};

export default ContactList;
