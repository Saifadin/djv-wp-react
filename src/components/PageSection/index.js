import React from 'react'

import pageSectionStyles from './PageSection.scss'

const PageSection = ({ fullWidth, title, children, bgImage, bgImagePosition }) => {
  return (
    <section className={ fullWidth ? pageSectionStyles.fullWidth : pageSectionStyles.grid }>
      { bgImage && <div className={bgImagePosition === 'right' ? pageSectionStyles.bgImageRight : pageSectionStyles.bgImageLeft}>
        <div className={pageSectionStyles.bgOverlay} />
        <img src={bgImage} alt={title} className={pageSectionStyles.image} />
      </div> }
      <div className={fullWidth ? pageSectionStyles.grid : pageSectionStyles.content}>
        <h2 className={pageSectionStyles.heading}>{title}</h2>
        { children }
      </div>
    </section>
  )
}

export default PageSection
