import { useDispatch } from 'react-redux';
import { fetchDeleteContact } from 'redux/operations';

import PropTypes from 'prop-types';

import styles from '../../phonebook.module.scss';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.blockItem}>
      {name}: {phone}
      <button
        onClick={() => dispatch(fetchDeleteContact(id))}
        type="button"
        className={styles.btnDelete}
      >
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
