import React, { useContext, useEffect, useState } from 'react';

import ModalContext from '../../contexts/ModalContext';
import DonationModal from '../DonationModal';
import buttonStyles from './HeaderDonationButton.scss';

const HeaderDonationButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toggleModal, visibleModal } = useContext(ModalContext);

  useEffect(() => {
    const scrollHandler = (e) => {
      const bodyScrollHeight = e.target.scrollingElement.scrollTop;
      if (window.innerWidth < 601 && bodyScrollHeight < 600) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    document.addEventListener('scroll', scrollHandler);

    return () => document.removeEventListener('scroll', this.scrollHandler);
  }, []);

  const openDonationModal = () => {
    toggleModal(true, 'donation');
  };

  const closeDonationModal = () => {
    toggleModal(false, 'donation');
  };

  return (
    <React.Fragment>
      <button key="button" className={isVisible ? buttonStyles.donationButton : buttonStyles.hideButton} onClick={openDonationModal}>
        <span>Jetzt Spenden</span>
      </button>
      <DonationModal key="modal" isOpen={visibleModal === 'donation'} onCloseModal={closeDonationModal} />
    </React.Fragment>
  );
};

export default HeaderDonationButton;
