import css from './SearchBar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFiltersLocation } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';
import { icons as sprite } from '../../assets/icons/index.js';

const SearchBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFiltersLocation);

  const onChangeFilter = event => {
    const location = event.target.value;
    console.log('Location input:', location);
    dispatch(changeFilter(location));
  };

  return (
    <form className={css.searchBox}>
      <label className={css.label}>
        Location
        <input
          className={css.searchInput}
          type="text"
          name="locationSearch"
          value={filters}
          onChange={onChangeFilter}
          placeholder="Kyiv, Ukraine"
        />
      </label>
      <button className={css.locationBtn}>
        <svg className={css.iconMap} width="16" height="16">
          <use xlinkHref={`${sprite}#icon-map-pin`}></use>
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
