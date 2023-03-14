import { useDispatch } from 'react-redux';
import { fetchDeleteContact } from 'redux/operations';

import PropTypes from 'prop-types';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {name}: {phone}
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
  phone: PropTypes.string.isRequired,
};
