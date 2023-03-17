import { useDispatch } from 'react-redux';
import { fetchDeleteContact } from 'redux/contacts/contacts-operations';

import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {name}: {number}
      <button onClick={() => dispatch(fetchDeleteContact(id))} type="button">
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
