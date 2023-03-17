const fields = {
  name: {
    type: 'text',
    name: 'name',
    required: true,
    label: 'User name',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  },
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
