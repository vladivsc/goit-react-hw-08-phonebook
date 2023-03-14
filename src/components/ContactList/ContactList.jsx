import { useSelector } from 'react-redux';

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
    <ul>
      {contacts.length === 0 ? (
        <p>Contacts list is empty!</p>
      ) : (
        filterContacts.map(({ id, name, phone }) => {
          return <ContactItem key={id} id={id} name={name} phone={phone} />;
        })
      )}
    </ul>
  );
};

export default ContactList;
