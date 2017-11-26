import React from 'react'

import contactElementStyles from './ContactElement.scss'

const ContactElement = ({iconName, children}) => {
  return (
    <div className={contactElementStyles.wrapper}>
      <div className={`fa fa-${iconName} fa-3x`} />
      <div className={contactElementStyles.content}>
        {children}
      </div>
    </div>
  )
}

export default ContactElement