import React, { Component } from 'react'
import Modal from 'react-modal'

import donationModalStyles from './DonationModal.scss'

class DonationModal extends Component {
  render() {
    const { isOpen, onCloseModal } = this.props
    const donationUrl = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=S7ZAP9MNV8EGU'

    return (
      <Modal
        key='modal'
        isOpen={isOpen}
        contentLabel='onRequestClose Example'
        className={donationModalStyles.modal}
        overlayClassName={donationModalStyles.overlay}
        onRequestClose={onCloseModal}
      >
        <div className={donationModalStyles.header}>
          <button className={['fa fa-times fa-3x', donationModalStyles.closeButton].join(' ')} onClick={onCloseModal} />
        </div>
        <div className={donationModalStyles.wrapper}>
          <h2 className={donationModalStyles.headline}>In drei Schritten zur Spende:</h2>
          <h3 className={donationModalStyles.stepHeadline}>1. Spendenzweck auswählen:</h3>
          <select className={donationModalStyles.select}>
            <option>123</option>
            <option>123</option>
            <option>123</option>
            <option>123</option>
          </select>
          <h3 className={donationModalStyles.stepHeadline}>2. Summe eingeben:</h3>
          <input type='number' />
          <h3 className={donationModalStyles.stepHeadline}>3. Über Paypal abschließen: </h3>
          <a href={donationUrl}>Jetzt Spenden</a>
        </div>
      </Modal>
    )
  }
}

export default DonationModal