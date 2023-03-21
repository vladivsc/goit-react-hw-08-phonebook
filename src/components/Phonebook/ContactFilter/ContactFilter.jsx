import { useDispatch } from 'react-redux';
import { Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';

import { setFilter } from 'redux/filter-contact/filter-slice';

const ContactFilter = () => {
  const dispatch = useDispatch();

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  return (
    <Flex>
      <FormControl mb="20px" p="10px">
        <FormLabel>Find contacts by name:</FormLabel>
        <Input
          type="text"
          name="name"
          onChange={changeFilter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="User name"
        />
      </FormControl>
    </Flex>
  );
};

export default ContactFilter;
