const fields = {
  email: {
    type: 'email',
    name: 'email',
    required: true,
    label: 'User email',
    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$',
  },
  password: {
    type: 'password',
    name: 'password',
    required: true,
    label: 'User password',
    minLength: '7',
  },
};

export default fields;
