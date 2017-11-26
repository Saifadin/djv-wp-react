import React, { Component } from 'react'

import fixedHeaderStyles from './FixedHeader.scss'

class FixedHeader extends Component {
  render() {
    return (
      <div className={fixedHeaderStyles.fixed}>
        {this.props.children}
      </div>
    );
  }
}

export default FixedHeader;