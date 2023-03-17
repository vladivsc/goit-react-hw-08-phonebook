import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter-contact/filter-slice';

const ContactFilter = () => {
  const dispatch = useDispatch();

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  return (
    <div>
      <label>
        Find contacts by name
        <input onChange={changeFilter} type="text" name="filter"></input>
      </label>
    </div>
  );
};

export default ContactFilter;
