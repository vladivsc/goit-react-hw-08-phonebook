import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import AuthLayout from './components/AuthLayout/AuthLayout';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthLayout>
            <BrowserRouter basename="/goit-react-hw-08-phonebook">
              <App />
            </BrowserRouter>
          </AuthLayout>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
