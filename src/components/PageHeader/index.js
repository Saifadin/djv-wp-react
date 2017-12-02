import React from 'react'

import pageHeaderStyles from './PageHeader.scss'

const PageHeader = ({ title, bgImage }) => {
  return (
    <section className={pageHeaderStyles.headSection}>
      <div className={pageHeaderStyles.headBg}>
        <img src={bgImage} alt={title} className={pageHeaderStyles.headBgImage} />
        <div className={pageHeaderStyles.headBgImageOverlay} />
      </div>
      <div className={pageHeaderStyles.headContentWrapper}>
        <div className={pageHeaderStyles.headContent}>
          <img src='/Logo-white.png' alt='djv-logo' className={pageHeaderStyles.headLogo}/>
          <h1 className={pageHeaderStyles.headTitle}>{title}</h1>
        </div>
      </div>
    </section>
  )
}

export default PageHeader