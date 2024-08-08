import { icons as sprite } from '../../assets/icons/index.js';
import css from './Location.module.css';

const Location = ({ location }) => {
  return (
    <p className={css.text}>
      <svg className={css.iconMap} width="16" height="16">
        <use xlinkHref={`${sprite}#icon-map-pin`}></use>
      </svg>
      {location}
    </p>
  );
};

export default Location;
