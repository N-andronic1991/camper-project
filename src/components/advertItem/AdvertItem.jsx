import css from './AdvertItem.module.css';
import clsx from 'clsx';
import { icons as sprite } from '../../assets/icons/index.js';
import Reviews from '../reviews/Reviews';
import Location from '../location/Location';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFavorite } from '../../redux/favorites/selectors';
import { toggleFavorite } from '../../redux/favorites/slice';
import { openModal, setSelectedAdvert } from '../../redux/modal/slice';
const AdvertItem = ({
  _id,
  name,
  gallery,
  price,
  reviews,
  location,
  description,
}) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(state => selectIsFavorite(state, _id));

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(_id));
  };

  const handleShowMoreDetails = () => {
    dispatch(setSelectedAdvert(_id));
    dispatch(openModal());
  };

  return (
    <div className={css.card}>
      <img src={gallery[0]} alt={name} width="290" height="310" />
      <div className={css.cardContent}>
        <div className={css.textThumb}>
          <h2>{name}</h2>
          <p className={css.price}>
            &euro;{price}.00
            <button
              onClick={handleFavoriteClick}
              className={css.favoriteBtn}
              type="button"
            >
              <svg
                className={clsx(css.iconHeart, {
                  [css.iconHeartFavorited]: isFavorite,
                })}
                width="21"
                height="18"
              >
                <use xlinkHref={`${sprite}#icon-heart`}></use>
              </svg>
            </button>
          </p>
        </div>
        <div className={css.thumb}>
          <Reviews reviews={reviews} />
          <Location location={location} />
        </div>

        <p className={css.description}>{description}</p>
        {/* <ul class="categoryList">
          <li class="categoryItem">
            <button class="categoryBtn" type="button">
              <svg class="users" width="20" height="20">
                <use xlink:href="./src/assets/icons/sprite.svg#icon-users"></use>
              </svg>
              2 adults
            </button>
          </li>
        </ul> */}

        <button
          onClick={handleShowMoreDetails}
          className={css.btn}
          type="button"
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default AdvertItem;
