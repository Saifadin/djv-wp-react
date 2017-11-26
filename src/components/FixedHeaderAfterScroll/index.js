import React, { Component } from 'react'

import fixedHeaderStyles from './FixedHeaderAfterScroll.scss'

class FixedHeaderAfterScroll extends Component {
  state = {
    isFixed: false,
    headerOffset: null
  }

  componentWillMount() {
    document.addEventListener('scroll', (e) => {
      const bodyScrollHeight = e.target.scrollingElement.scrollTop
      const headerOffsetTop = document.getElementsByClassName('scrollHeader')[0].offsetTop
      if (this.state.headerOffset) {
        this.setState({
          isFixed: this.state.headerOffset <= bodyScrollHeight
        })
      } else {
        this.setState({
          isFixed: headerOffsetTop <= bodyScrollHeight,
          headerOffset: document.getElementsByClassName('scrollHeader')[0].offsetTop
        })
      }
    })
  }

  componentWillUnmount() {
    document.removeEventListener('scroll');
  }
  
  render() {
    const isFixedClassName = this.state.isFixed ? fixedHeaderStyles.fixed : '';
    const jsClassName = 'scrollHeader'
    return (
      <div className={fixedHeaderStyles.wrapper}>
        <div className={[jsClassName, isFixedClassName].join(' ')}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default FixedHeaderAfterScroll;