import React from 'react'

import pageSectionStyles from './PageSection.scss'

const PageSection = ({ fullWidth, title, children }) => {
  return (
    <div className={ fullWidth ? pageSectionStyles.fullWidth : pageSectionStyles.grid }>
      <h2 className={pageSectionStyles.heading}>{title}</h2>
      { children }
    </div>
  )
}

export default PageSection
