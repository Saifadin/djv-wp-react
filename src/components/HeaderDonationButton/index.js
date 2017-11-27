import React, { Component } from 'react'

import DonationModal from '../DonationModal'
import buttonStyles from './HeaderDonationButton.scss'

class HeaderDonationButton extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      modalIsOpen: false
    }

    this.openDonationModal = this.openDonationModal.bind(this)
    this.closeDonationModal = this.closeDonationModal.bind(this)
  }
  
  componentWillMount() {
    document.addEventListener('scroll', (e) => {
      const bodyScrollHeight = e.target.scrollingElement.scrollTop
      if (window.innerWidth < 601 && bodyScrollHeight < 600) {
        this.setState({
          isVisible: false
        })
      } else {
        this.setState({
          isVisible: true
        })
      }
    })
  }

  openDonationModal() {
    this.setState({
      modalIsOpen: true
    })
  }

  closeDonationModal() {
    this.setState({
      modalIsOpen: false
    })
  }
  
  render() {
    return [
      <button key='button' className={this.state.isVisible ? buttonStyles.donationButton : buttonStyles.hideButton} onClick={this.openDonationModal}>
        <span>Jetzt Spenden</span>
      </button>,
      <DonationModal
        key='modal'
        isOpen={this.state.modalIsOpen}
        onCloseModal={this.closeDonationModal}
      />
    ]
  }
}

export default HeaderDonationButton;