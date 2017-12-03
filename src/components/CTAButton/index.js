import React from 'react'

import ctaButtonStyles from './CTAButton.scss'

const CTAButton = ({ title, url}) => {
  return (
    <a className={ctaButtonStyles.button} href={url} title={title}>{title}</a>
  )
}

export default CTAButton