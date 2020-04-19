import React, { useLayoutEffect, useState } from 'react';

import fixedHeaderStyles from './FixedHeaderAfterScroll.scss';

const FixedHeaderAfterScroll = ({ children }) => {
  const [isFixed, setIsFixed] = useState(false);

  useLayoutEffect(() => {
    const scrollHandler = (e) => {
      const bodyHeight = window.innerHeight;
      const bodyScrollPosition = window.scrollY;

      if (bodyScrollPosition + 72 > bodyHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  const isFixedClassName = isFixed ? fixedHeaderStyles.fixed : '';
  const jsClassName = 'scrollHeader';

  return (
    <div className={fixedHeaderStyles.wrapper}>
      <div className={[jsClassName, isFixedClassName].join(' ')}>{children}</div>
    </div>
  );
};

export default FixedHeaderAfterScroll;
