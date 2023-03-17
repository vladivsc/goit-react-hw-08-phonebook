import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  fetchAllContacts,
  fetchAddContact,
} from 'redux/contacts/contacts-operations';

import initialState from './initialState';

const ContactForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    return (initialState[name] = value);
  };

  const handleAddContact = data => {
    dispatch(fetchAddContact(data));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    handleAddContact({ ...initialState });
    evt.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label>Number</label>
          <input
            onChange={handleChange}
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contacts</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
