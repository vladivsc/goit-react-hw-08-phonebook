import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './shared/Loader/Loader';

const HomePage = lazy(() => import('./Pages/HomePage'));
const RegistrationPage = lazy(() => import('./Pages/RegistrationPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const Phonebook = lazy(() => import('./Phonebook/Phonebook'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<Phonebook />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
