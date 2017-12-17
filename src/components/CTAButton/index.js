import React from 'react'

import ctaButtonStyles from './CTAButton.scss'

const CTAButton = ({ title, url, blank }) => {
  return (
    <a className={ctaButtonStyles.button} href={url} title={title} target={blank ? '_blank' : ''}>{title}</a>
  )
}

export default CTAButton