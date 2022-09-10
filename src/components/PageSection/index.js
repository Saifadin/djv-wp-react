import React from 'react';

import pageSectionStyles from './PageSection.scss';

const PageSection = ({ fullWidth, min, title, children, bgImage, bgImagePosition }) => {
  return (
    <section className={min ? pageSectionStyles.minSection : fullWidth ? pageSectionStyles.fullWidth : pageSectionStyles.grid}>
      {bgImage && (
        <div className={bgImagePosition === 'right' ? pageSectionStyles.bgImageRight : pageSectionStyles.bgImageLeft}>
          <div className={pageSectionStyles.bgOverlay} />
          <img src={bgImage} alt={title} className={pageSectionStyles.image} />
        </div>
      )}
      <div className={fullWidth ? pageSectionStyles.grid : pageSectionStyles.content}>
        {title ? <h2 className={pageSectionStyles.heading}>{title}</h2> : null}
        {children}
      </div>
    </section>
  );
};

export default PageSection;
