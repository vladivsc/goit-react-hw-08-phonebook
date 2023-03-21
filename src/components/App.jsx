import UserRoutes from './UserRoutes';
import Navbar from './Navbar/Navbar';
import { Container } from '@chakra-ui/react';

export const App = () => {
  return (
    <Container p="5px">
      <Navbar />
      <UserRoutes />
    </Container>
  );
};
