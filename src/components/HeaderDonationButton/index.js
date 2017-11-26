import React, { Component } from 'react';

import buttonStyles from './HeaderDonationButton.scss'

class HeaderDonationButton extends Component {
  state = {
    isVisible: false
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
  
  render() {
    return (
      <button className={this.state.isVisible ? buttonStyles.donationButton : buttonStyles.hideButton}>
        <span>Jetzt Spenden</span>
      </button>
    );
  }
}

export default HeaderDonationButton;