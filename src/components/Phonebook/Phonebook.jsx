import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactForm from './ContactForm/ContactForm';

import styles from '../Phonebook/phonebook.module.scss';

const Phonebook = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      <ContactFilter />
      <ContactList />
    </div>
  );
};

export default Phonebook;
