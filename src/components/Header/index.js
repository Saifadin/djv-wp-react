import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import uniqId from 'uniqid';

import HeaderDonationButton from '../HeaderDonationButton';
import headerStyles from './Header.scss';

const Header = ({ tag = '', modalTitle = '' }) => {
  const [mobileMenuHidden, setMobileMenuHidden] = useState(true);
  const navList = [
    { link: '/projekte', title: 'Projekte' },
    { link: '/ramadan', title: 'Ramadan' },
    { link: '/ueber-uns', title: 'Über Uns' },
    { link: '/spenden-alle', title: 'Spenden' },
  ];

  useEffect(() => {
    return () => document.getElementsByTagName('body')[0].classList.remove('mobileNavOpen');
  }, []);

  const openMenu = () => {
    setMobileMenuHidden(true);
    document.getElementsByTagName('body')[0].classList.add('mobileNavOpen');
  };

  const closeMenu = () => {
    setMobileMenuHidden(true);
    document.getElementsByTagName('body')[0].classList.remove('mobileNavOpen');
  };

  return (
    <header className={headerStyles.wrapper}>
      <div className={headerStyles.header}>
        <Link to="/" className={headerStyles.logoLink}>
          <img src="/Logo.png" alt="DJV Logo" className={headerStyles.logo} />
        </Link>
        <div className={['fa fa-bars fa-2x', headerStyles.menuIcon].join(' ')} onClick={openMenu} />
        <div className={mobileMenuHidden ? headerStyles.menu : headerStyles.mobileMenu}>
          <i className={['fa fa-times fa-2x', headerStyles.closeButton].join(' ')} onClick={closeMenu} />
          {navList.map((item) => (
            <Link key={uniqId()} to={item.link} className={headerStyles.menuItem}>
              {item.title}
            </Link>
          ))}
        </div>
        <HeaderDonationButton tag={tag} modalTitle={modalTitle} />
      </div>
    </header>
  );
};

export default Header;
