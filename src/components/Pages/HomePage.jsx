import { Flex, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Flex justifyContent="center" mt="30px">
      <Text fontSize={['22px', '26px', '28px']} fontWeight="bold">
        Welcome to the Phonebook!
      </Text>
    </Flex>
  );
};

export default HomePage;
