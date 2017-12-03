import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import HeaderDonationButton from '../HeaderDonationButton'
import headerStyles from './Header.scss'

class Header extends Component {
  constructor() {
    super()

    this.state = {
      mobileMenuHidden: true
    }

    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  openMenu() {
    this.setState({
      mobileMenuHidden: false
    })
    document.getElementsByTagName('body')[0].classList.add('mobileNavOpen')
  }

  closeMenu() {
    this.setState({
      mobileMenuHidden: true
    })
    document.getElementsByTagName('body')[0].classList.remove('mobileNavOpen')
  }

  componentWillUnmount() {
    document.getElementsByTagName('body')[0].classList.remove('mobileNavOpen')
  }

  render() {
    const navList = [
      { key: '12345', link: '/projekte', title: 'Projekte' },
      { key: '12347', link: '/ueber-uns', title: 'Über Uns' },
      { key: '12346', link: '/ziele', title: 'Ziele' },
    ]
  
    return (
      <header className={headerStyles.wrapper}>
        <div className={headerStyles.header}>
          <Link to='/' className={headerStyles.logoLink}>
            <img src='/Logo.png' alt='DJV Logo' className={headerStyles.logo} />
          </Link>
          <div className={['fa fa-bars fa-2x', headerStyles.menuIcon].join(' ')} onClick={this.openMenu} />
          <div className={this.state.mobileMenuHidden ? headerStyles.menu : headerStyles.mobileMenu}>
            <i className={['fa fa-times fa-2x', headerStyles.closeButton].join(' ')} onClick={this.closeMenu} />
            { navList.map((item) => <Link key={item.key} to={item.link} className={headerStyles.menuItem}>{item.title}</Link>) }
          </div>
          <HeaderDonationButton />
        </div>
      </header>
    )
  }
}

export default Header
