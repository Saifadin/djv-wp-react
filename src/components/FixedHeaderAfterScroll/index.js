import React, { Component } from 'react'

import fixedHeaderStyles from './FixedHeaderAfterScroll.scss'

class FixedHeaderAfterScroll extends Component {
  constructor() {
    super()
    this.state = {
      isFixed: false,
      headerOffset: null
    }
    this.scrollHandler = this.scrollHandler.bind(this)
  }

  componentWillMount() {
    document.addEventListener('scroll', this.scrollHandler)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollHandler);
  }

  scrollHandler(e) {
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