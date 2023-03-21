import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Flex, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

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
    <Flex mt="20px" flexDirection="column" p="10px">
      <form onSubmit={handleSubmit}>
        <FormControl mb="20px" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Name"
          />
        </FormControl>
        <FormControl mb="20px" isRequired>
          <FormLabel>Number</FormLabel>
          <Input
            type="tel"
            name="number"
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            placeholder="Number"
          />
        </FormControl>
        <Flex justifyContent="center">
          <Button colorScheme="whatsapp" type="submit">
            Add contacts
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default ContactForm;
