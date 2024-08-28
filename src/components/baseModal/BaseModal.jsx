import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import css from './BaseModal.module.css';
import { selectIsModalOpen } from '../../redux/modal/selectors';
import { closeModal } from '../../redux/modal/slice';
import { icons as sprite } from '../../assets/icons/index.js';

const BaseModal = ({ children }) => {
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

  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);
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
      {children}
    </Modal>
  );
};

export default BaseModal;
