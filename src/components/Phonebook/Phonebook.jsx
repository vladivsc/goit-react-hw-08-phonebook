import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactForm from './ContactForm/ContactForm';

const Phonebook = () => {
  return (
    <>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </>
  );
};

export default Phonebook;
