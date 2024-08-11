import css from './Features.module.css';
import { icons as sprite } from '../../assets/icons/index.js';
const Features = ({ selectedAdvert }) => {
  return (
    <div className={css.features}>
      {selectedAdvert ? (
        <>
          <ul className={css.categoryList}>
            <li className={css.categoryItem}>
              <button className={css.categoryBtn} type="button">
                <svg className={css.users} width="20" height="20">
                  <use xlinkHref={`${sprite}#icon-users`}></use>
                </svg>
                {selectedAdvert.adults} adults
              </button>
            </li>
            <li className={css.categoryItem}>
              <button className={css.categoryBtn} type="button">
                <svg className={css.automatic} width="20" height="20">
                  <use xlinkHref={`${sprite}#icon-automatic`}></use>
                </svg>
                <span className={css.uppercase}>
                  {selectedAdvert.transmission}
                </span>
              </button>
            </li>
            <li className={css.categoryItem}>
              <button className={css.categoryBtn} type="button">
                <svg className={css.petrol} width="20" height="20">
                  <use xlinkHref={`${sprite}#icon-petrol`}></use>
                </svg>
                <span className={css.uppercase}>{selectedAdvert.engine}</span>
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
                {selectedAdvert.details.beds} beds
              </button>
            </li>
          </ul>
          <p className={css.text}>Vehicle details</p>

          <ul className={css.detailsList}>
            <li className={css.detailsItem}>
              <p className={css.feature}>Form</p>
              <p className={css.feature}>{selectedAdvert.form}</p>
            </li>

            <li className={css.detailsItem}>
              <p className={css.feature}>Length</p>
              <p className={css.feature}>{selectedAdvert.length}</p>
            </li>
            <li className={css.detailsItem}>
              <p className={css.feature}>Width</p>
              <p className={css.feature}>{selectedAdvert.width}</p>
            </li>
            <li className={css.detailsItem}>
              <p className={css.feature}>Height</p>
              <p className={css.feature}>{selectedAdvert.height}</p>
            </li>
            <li className={css.detailsItem}>
              <p className={css.feature}>Tank</p>
              <p className={css.feature}>{selectedAdvert.tank}</p>
            </li>

            <li className={css.detailsItem}>
              <p className={css.feature}>Consumption</p>
              <p className={css.feature}>{selectedAdvert.consumption}</p>
            </li>
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default Features;
