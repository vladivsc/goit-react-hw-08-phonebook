import { Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Flex justifyContent="center">
      <Text>
        Page Not Found {':( '}
        <Link to="/">
          <b>click here to return!</b>
        </Link>
      </Text>
    </Flex>
  );
};

export default NotFound;
