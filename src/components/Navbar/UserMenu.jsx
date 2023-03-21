import { useSelector, useDispatch } from 'react-redux';

import { Text, Button } from '@chakra-ui/react';

import { getUser } from 'redux/selectors';
import { logout } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Text fontSize={[16, 24]}>
        Welcome, <b>{name}</b>
      </Text>
      <Button colorScheme="facebook" onClick={onLogout}>
        Logout
      </Button>
    </>
  );
};

export default UserMenu;
