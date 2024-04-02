import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { TbDeviceMobileSearch } from 'react-icons/tb';
import { IoCloseOutline } from 'react-icons/io5';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const searchValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handelInputSearch = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchContainer}>
      <p className={css.searchParagraf}>Find contacts by name</p>
      <input
        className={css.searchForm}
        type="text"
        value={searchValue}
        onChange={handelInputSearch}
      />
      <TbDeviceMobileSearch className={css.searchImg} width={22} />
      <IoCloseOutline className={css.searchClose} size="20" />
    </div>
  );
};

export default SearchBox;
