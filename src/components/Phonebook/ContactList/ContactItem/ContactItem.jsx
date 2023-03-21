import { useDispatch } from 'react-redux';
import { fetchDeleteContact } from 'redux/contacts/contacts-operations';
import { Button, Text, Flex } from '@chakra-ui/react';

import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Flex
      p="10px"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      variant="unstyled"
    >
      <Text>
        <b>{name}</b>: {number}
      </Text>
      <Flex mr="5px">
        <Button
          colorScheme="red"
          onClick={() => dispatch(fetchDeleteContact(id))}
        >
          Delete
        </Button>
      </Flex>
    </Flex>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
