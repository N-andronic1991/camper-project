import { icons as sprite } from '../../assets/icons/index.js';
import css from './Rating.module.css';
const Rating = ({ reviewerRating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(reviewerRating);
  const emptyStars = totalStars - fullStars; // Remaining stars are grey

  const renderStars = () => {
    const stars = [];

    // Render full (yellow) stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className={CSS.iconStar} width={16} height={16}>
          <use xlinkHref={`${sprite}#icon-star`} />
        </svg>
      );
    }

    // Render empty (grey) stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={fullStars + i}
          className={css.iconEmpty}
          width={16}
          height={16}
        >
          <use xlinkHref={`${sprite}#icon-empty-star`} />
        </svg>
      );
    }

    return stars;
  };

  return <div className={css.rating}>{renderStars()}</div>;
};

export default Rating;
