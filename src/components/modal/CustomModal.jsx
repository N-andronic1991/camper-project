import Reviews from '../reviews/Reviews';
import Location from '../location/Location';
import Features from '../features/Features';
import Loader from '../loader/Loader';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Modal from 'react-modal';
import { closeModal } from '../../redux/modal/slice';
import { useSelector, useDispatch } from 'react-redux';
import css from './CustomModal.module.css';
import { icons as sprite } from '../../assets/icons/index.js';
import { useState } from 'react';
import { selectError, selectLoading } from '../../redux/adverts/selectors';
import BookingForm from '../bookingForm/BookingForm';

const CustomModal = () => {
  Modal.setAppElement('#root');

  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: ' rgb(0, 0, 0, .8)',
    },
    content: {
      width: '982px',
      minHeight: '620px',
      padding: '40px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 100,
    },
  };
  const [activeTab, setActiveTab] = useState('features');
  const dispatch = useDispatch();
  const isModalOpen = useSelector(state => state.modal.isModalOpen);
  const selectedAdvertId = useSelector(state => state.modal.selectedAdvertId);
  const selectedAdvert = useSelector(state =>
    state.adverts.items.find(advert => advert._id === selectedAdvertId)
  );
  console.log(selectedAdvert);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      isOpen={isModalOpen}
      style={customStyles}
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      contentLabel="Camper Details"
    >
      <button className={css.modalBtn} onClick={handleCloseModal}>
        <svg className={css.iconCross} width="20" height="20">
          <use xlinkHref={`${sprite}#icon-cross`}></use>
        </svg>
      </button>
      {selectedAdvert ? (
        <div className={css.cardContent}>
          {loading && <Loader />}
          {error && <ErrorMessage />}
          <div className={css.textThumb}>
            <h2 className={css.title}>{selectedAdvert.name}</h2>
            <div className={css.thumb}>
              <Reviews reviews={selectedAdvert.reviews} />
              <Location location={selectedAdvert.location} />
            </div>
            <p className={css.price}>&euro;{selectedAdvert.price}.00</p>
          </div>
          <ul className={css.imgThumb}>
            {Array.isArray(selectedAdvert.gallery) &&
              selectedAdvert.gallery.map((url, index) => {
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
          <p className={css.description}>{selectedAdvert.description}</p>
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
                  {selectedAdvert.reviews && selectedAdvert.reviews.length > 0
                    ? selectedAdvert.reviews.map((review, index) => {
                        return (
                          <li key={index}>
                            <h3>{review.reviewer_name}</h3>
                            <span>{review.reviewer_rating}</span>
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
      ) : null}
    </Modal>
  );
};

export default CustomModal;
