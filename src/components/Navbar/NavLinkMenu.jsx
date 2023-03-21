import { NavLink } from 'react-router-dom';

import { Flex, Text } from '@chakra-ui/react';

import { PhoneBoolIcon } from './phone-book-icon';

const NavLinkMenu = () => {
  return (
    <Flex
      mx="0px"
      p="10px 5px"
      alignItems="center"
      justifyContent="space-around"
    >
      <NavLink to="/">
        <Flex alignItems="center">
          <PhoneBoolIcon w="10" h="10" />
          <Text mr="10px" fontSize={['18px', 'xl']} fontWeight="bold">
            Phonebook
          </Text>
        </Flex>
      </NavLink>
    </Flex>
  );
};

export default NavLinkMenu;
