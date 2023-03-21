import { useState } from 'react';

import useForm from 'components/hooks/useForm';

import initialState from './initialState';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormHelperText,
  Flex,
  Text,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';

const RegistrationForm = ({ onSubmit }) => {
  const [show, setShow] = useState(false);
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const handleClick = () => setShow(!show);

  const { name, email, password } = state;

  return (
    <Flex mt="20px" flexDirection="column" p="10px">
      <Text
        mx="auto"
        mb="20px"
        fontSize={['22px', '26px', '28px']}
        fontWeight="bold"
      >
        Registration page
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl mb="20px" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="User name"
          />
          <FormHelperText as="p" opacity="0.6">
            Name may contain only letters, apostrophe, dash and spaces.
          </FormHelperText>
        </FormControl>
        <FormControl mb="20px" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
            placeholder="example@gmail.com"
          />
        </FormControl>
        <FormControl mb="20px" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              name="password"
              value={password}
              onChange={handleChange}
              minLength="7"
              placeholder="Password"
              type={show ? 'text' : 'password'}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormHelperText as="p" opacity="0.6">
            Password must be at least 7 characters.
          </FormHelperText>
        </FormControl>
        <Flex justifyContent="center">
          <Button size="sm" colorScheme="green" type="submit">
            Submit
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default RegistrationForm;
