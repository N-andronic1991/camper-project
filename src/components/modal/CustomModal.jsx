import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { closeModal } from '../../redux/modal/slice';
import css from './CustomModal.module.css';

const CustomModal = () => {
  Modal.setAppElement('#root');

  const customStyles = {
    overlay: {
      backgroundColor: ' rgb(0, 0, 0, .8)',
    },
    content: {
      width: '982px',
      height: '720px',
      display: 'flex',
      justifyContent: 'stretch',
      alignItems: 'center',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      overflow: 'hidden',
    },
  };
  const dispatch = useDispatch();
  const isModalOpen = useSelector(state => state.modal.isModalOpen);
  const selectedAdvertId = useSelector(state => state.modal.selectedAdvertId);

  const selectedAdvert = useSelector(state =>
    state.adverts.items.find(advert => advert._id === selectedAdvertId)
  );

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
      // className="modal-content"
      // overlayClassName="modal-overlay"
    >
      <button className={css.modalBtn} onClick={handleCloseModal}>
        x
      </button>
      {selectedAdvert ? (
        <div className={css.card}>
          <img
            src={selectedAdvert.gallery[0]}
            alt={selectedAdvert.name}
            width="290"
            height="310"
          />
          <div className={css.cardContent}>
            <div className={css.textThumb}>
              <h2>{selectedAdvert.name}</h2>
              <p className={css.price}>&euro;{selectedAdvert.price}.00</p>
            </div>
            {/* <div className={css.thumb}>
              <Reviews reviews={selectedAdvert.reviews} />
              <Location location={selectedAdvert.location} />
            </div> */}
          </div>
        </div>
      ) : null}
    </Modal>
  );
};

export default CustomModal;
