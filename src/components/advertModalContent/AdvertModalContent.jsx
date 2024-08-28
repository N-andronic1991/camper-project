import css from './AdvertModalContent.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Reviews from '../reviews/Reviews';
import Location from '../location/Location';
import Features from '../features/Features';
import BookingForm from '../bookingForm/BookingForm';
import Rating from '../rating/Rating';
import { selectSelectedAdvertId } from '../../redux/modal/selectors';

const AdvertModalContent = ({
  name,
  reviews,
  location,
  price,
  gallery,
  description,
}) => {
  const [activeTab, setActiveTab] = useState('features');
  const selectedAdvertId = useSelector(selectSelectedAdvertId);
  const selectedAdvert = useSelector(state =>
    state.adverts.items.find(advert => advert._id === selectedAdvertId)
  );
  return (
    <div className={css.cardContent}>
      <div className={css.textThumb}>
        <h2 className={css.title}>{name}</h2>
        <div className={css.thumb}>
          <Reviews reviews={reviews} />
          <Location location={location} />
        </div>
        <p className={css.price}>&euro;{price.toFixed(2)}</p>
      </div>
      <ul className={css.imgThumb}>
        {Array.isArray(gallery) &&
          gallery.map((url, index) => {
            return (
              <li className={css.imgItem} key={index}>
                <img
                  className={css.photo}
                  src={url}
                  alt="Photo of camper"
                  width="290"
                  height="310"
                />
              </li>
            );
          })}
      </ul>
      <p className={css.description}>{description}</p>
      <div className={css.tabs}>
        <button
          onClick={() => setActiveTab('features')}
          className={css.tabsBtn}
          type="button"
        >
          Features
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={css.tabsBtn}
          type="button"
        >
          Reviews
        </button>
      </div>
      <hr></hr>
      <div className={css.tabContent}>
        {activeTab === 'features' && (
          <div className={css.contentThumb}>
            <Features selectedAdvert={selectedAdvert} />
            <BookingForm />
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className={css.contentThumb}>
            <ul>
              {reviews && reviews.length > 0
                ? reviews.map((review, index) => {
                    return (
                      <li className={css.reviewItem} key={index}>
                        <div className={css.nameThumb}>
                          <span className={css.letter}>
                            {review.reviewer_name.charAt(0)}
                          </span>
                          <div className={css.ratingThumb}>
                            <h3 className={css.nameTitle}>
                              {review.reviewer_name}
                            </h3>
                            <Rating reviewerRating={review.reviewer_rating} />
                          </div>
                        </div>

                        <p>{review.comment}</p>
                      </li>
                    );
                  })
                : null}
            </ul>
            <BookingForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvertModalContent;
