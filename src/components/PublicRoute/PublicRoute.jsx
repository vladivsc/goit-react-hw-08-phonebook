import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuth } from 'redux/selectors';

import Loader from 'components/shared/Loader/Loader';

const PublicRoute = () => {
  const { isLogin, token } = useSelector(selectAuth);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;
