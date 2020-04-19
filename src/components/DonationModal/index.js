import React from 'react';
import Modal from 'react-modal';

import donationModalStyles from './DonationModal.scss';
import DonateBox from '../DonateBox';

const DonationModal = ({ isOpen, onCloseModal }) => {
  return (
    <Modal
      key="modal"
      isOpen={isOpen}
      contentLabel="onRequestClose Example"
      className={donationModalStyles.modal}
      overlayClassName={donationModalStyles.overlay}
      ariaHideApp={false}
      onRequestClose={onCloseModal}>
      <div className={donationModalStyles.header}>
        <button className={['fa fa-times fa-2x', donationModalStyles.closeButton].join(' ')} onClick={onCloseModal} />
      </div>
      <div className={donationModalStyles.wrapper}>
        <DonateBox />
      </div>
    </Modal>
  );
};

export default DonationModal;
