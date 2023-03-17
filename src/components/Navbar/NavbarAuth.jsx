import { NavLink } from 'react-router-dom';

const NavbarAuth = () => {
  return (
    <div>
      <NavLink to="/register">Sign in</NavLink> |{' '}
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
};

export default NavbarAuth;
