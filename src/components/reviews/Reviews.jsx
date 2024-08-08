import css from './Reviews.module.css';
import { icons as sprite } from '../../assets/icons/index.js';
const Reviews = ({ reviews }) => {
  const calculateAverageRating = reviews => {
    if (!reviews || reviews.length === 0) return 0; // Handle case with no reviews
    const totalRating = reviews.reduce(
      (sum, review) => sum + review.reviewer_rating,
      0
    );
    return (totalRating / reviews.length).toFixed(1);
  };

  return (
    <p className={css.text}>
      <svg className={css.iconStar} width="16" height="16">
        <use xlinkHref={`${sprite}#icon-star`}></use>
      </svg>
      {calculateAverageRating(reviews)}({reviews.length} Reviews)
    </p>
  );
};

export default Reviews;
