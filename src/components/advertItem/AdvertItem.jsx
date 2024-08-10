import css from './AdvertItem.module.css';
import clsx from 'clsx';
import { icons as sprite } from '../../assets/icons/index.js';
import Reviews from '../reviews/Reviews';
import Location from '../location/Location';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFavorite } from '../../redux/favorites/selectors';
import { toggleFavorite } from '../../redux/favorites/slice';
import { openModal, setSelectedAdvert } from '../../redux/modal/slice';
import Categories from '../categories/Categories';
const AdvertItem = ({
  _id,
  name,
  gallery,
  price,
  reviews,
  location,
  description,
  adults,
  engine,
  transmission,
  details,
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
                width="24"
                height="24"
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
        <Categories
          adults={adults}
          engine={engine}
          transmission={transmission}
          details={details}
        />

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
