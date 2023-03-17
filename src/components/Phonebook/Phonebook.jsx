import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactForm from './ContactForm/ContactForm';

const Phonebook = () => {
  return (
    <div>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      <ContactList />
    </div>
  );
};

export default Phonebook;
