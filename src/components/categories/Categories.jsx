import css from './Categories.module.css';
import { icons as sprite } from '../../assets/icons/index.js';
const Categories = ({ adults, engine, transmission, details }) => {
  return (
    <ul className={css.categoryList}>
      <li className={css.categoryItem}>
        <button className={css.categoryBtn} type="button">
          <svg className={css.users} width="20" height="20">
            <use xlinkHref={`${sprite}#icon-users`}></use>
          </svg>
          {adults} adults
        </button>
      </li>
      <li className={css.categoryItem}>
        <button className={css.categoryBtn} type="button">
          <svg className={css.automatic} width="20" height="20">
            <use xlinkHref={`${sprite}#icon-automatic`}></use>
          </svg>
          <span className={css.uppercase}>{transmission}</span>
        </button>
      </li>
      <li className={css.categoryItem}>
        <button className={css.categoryBtn} type="button">
          <svg className={css.petrol} width="20" height="20">
            <use xlinkHref={`${sprite}#icon-petrol`}></use>
          </svg>
          <span className={css.uppercase}>{engine}</span>
        </button>
      </li>
      <li className={css.categoryItem}>
        <button className={css.categoryBtn} type="button">
          <svg className={css.kitchen} width="20" height="20">
            <use xlinkHref={`${sprite}#icon-kitchen`}></use>
          </svg>
          Kitchen
        </button>
      </li>
      <li className={css.categoryItem}>
        <button className={css.categoryBtn} type="button">
          <svg className={css.beds} width="20" height="20">
            <use xlinkHref={`${sprite}#icon-beds`}></use>
          </svg>
          {details.beds} beds
        </button>
      </li>
    </ul>
  );
};

export default Categories;
