import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { signup } from 'redux/auth/auth-operations';
import { isUserLogin } from 'redux/selectors';

import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(isUserLogin);

  const handleSignup = data => {
    dispatch(signup(data));
  };

  if (isLogin) return <Navigate to="/contacts" />;

  return (
    <div>
      <h1>Registration page</h1>
      <RegistrationForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegistrationPage;
