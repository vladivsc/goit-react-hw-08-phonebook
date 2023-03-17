import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'redux/store';

import UserRoutes from './UserRoutes';
import Navbar from './Navbar/Navbar';

export const App = () => {
  return;
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Navbar />
        <UserRoutes />
      </BrowserRouter>
    </PersistGate>
  </Provider>;
};
