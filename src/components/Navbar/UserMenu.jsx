import { useSelector } from 'react-redux';

import Button from 'components/shared/Button/Button';

import { getUser } from 'redux/selectors';

const UserMenu = () => {
  const { name } = useSelector(getUser);

  return (
    <div>
      <p>Welcome, {name}</p>
      <Button>Logout</Button>
    </div>
  );
};

export default UserMenu;
