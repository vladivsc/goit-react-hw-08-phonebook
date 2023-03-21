import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from './shared/Loader/Loader';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const HomePage = lazy(() => import('./Pages/HomePage'));
const RegistrationPage = lazy(() => import('./Pages/RegistrationPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const Phonebook = lazy(() => import('./Phonebook/Phonebook'));
const NotFound = lazy(() => import('./Pages/NotFound'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<Phonebook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
