import useForm from 'components/hooks/useForm';

import TextField from 'components/shared/TextField/TextField';
import Button from 'components/shared/Button/Button';
import fields from './fields';

import initialState from './initialState';

const RegistrationForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Registry</Button>
    </form>
  );
};

export default RegistrationForm;
