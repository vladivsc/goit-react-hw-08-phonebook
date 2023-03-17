import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from 'redux/auth/auth-operations';
import { isUserLogin } from 'redux/selectors';

import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(isUserLogin);

  const handleLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) return <Navigate to="/contacts" />;

  return (
    <div>
      <h1>Login page</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
