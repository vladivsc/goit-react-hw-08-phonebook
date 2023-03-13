import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter-slice';

import styles from '../phonebook.module.scss';

const ContactFilter = () => {
  const dispatch = useDispatch();

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  return (
    <div className={styles.block}>
      <label>
        Find contacts by name
        <input onChange={changeFilter} type="text" name="filter"></input>
      </label>
    </div>
  );
};

export default ContactFilter;
