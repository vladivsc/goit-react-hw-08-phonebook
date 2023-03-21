import { useSelector } from 'react-redux';

import { Flex } from '@chakra-ui/react';

import NavbarAuth from './NavbarAuth';
import UserMenu from './UserMenu';
import NavLinkMenu from './NavLinkMenu';

import { isUserLogin } from 'redux/selectors';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <Flex
      mx="auto"
      p="10px 5px"
      alignItems="center"
      justifyContent="space-between"
    >
      {!isLogin ? (
        <>
          <NavLinkMenu />
          <NavbarAuth />
        </>
      ) : (
        <UserMenu />
      )}
    </Flex>
  );
};

export default Navbar;
