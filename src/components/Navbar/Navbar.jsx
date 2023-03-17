import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavbarAuth from './NavbarAuth';
import UserMenu from './UserMenu';
import { isUserLogin } from 'redux/selectors';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <div>
      <NavLink to="/">Phonebook</NavLink>
      {!isLogin && <NavbarAuth />}
      {isLogin && <UserMenu />}
    </div>
  );
};

export default Navbar;
