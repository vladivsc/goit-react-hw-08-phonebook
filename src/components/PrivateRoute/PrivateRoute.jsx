import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuth } from 'redux/selectors';

import Loader from 'components/shared/Loader/Loader';

const PrivateRoute = () => {
  const { isLogin, token } = useSelector(selectAuth);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
