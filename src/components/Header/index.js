import React from 'react'
import { Link } from 'react-router-dom'

import headerStyles from './Header.scss'

const Header = ({ title }) => {
  const navList = [
    { key: '12345', link: '/projekte', title: 'Projekte' },
    { key: '12346', link: '/ziele', title: 'Ziele' },
    { key: '12347', link: '/ueber-uns', title: 'Über Uns' },
  ]

  return (
    <header className={headerStyles.wrapper}>
      <div className={headerStyles.header}>
        <div className={headerStyles.menu}>
          <Link to='/' className={headerStyles.logoLink}>
            <img src='/Logo.png' alt='DJV Logo' className={headerStyles.logo} />
          </Link>
          { navList.map((item) => <Link key={item.key} to={item.link} className={headerStyles.menuItem}>{item.title}</Link>) }
        </div>
        <div className={headerStyles.donationButton}>
          <span>Jetzt Spenden</span>
        </div>
      </div>
    </header>
  )
}

export default Header
