import { Button, HStack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const NavbarAuth = () => {
  return (
    <HStack spacing="5px">
      <NavLink to="/register">
        <Button colorScheme="green" size="sm">
          Sign in
        </Button>
      </NavLink>
      <NavLink to="/login">
        <Button colorScheme="teal" size="sm">
          Log in
        </Button>
      </NavLink>
    </HStack>
  );
};

export default NavbarAuth;
