import React from 'react'
import { Link } from 'react-router-dom'

import ContactElement from '../ContactElement'
import footerStyles from './Footer.scss'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <h2 className={footerStyles.headline}>Kontakt</h2>
      <div className={footerStyles.contactInfo}>
        <ContactElement iconName='address-book-o'>
          <b>Adresse</b><br/>
          Drontheimer Str. 32A<br/>
          13359 Berlin
        </ContactElement>
        <ContactElement iconName='facebook'>
          <b>Facebook</b><br/>
          deutschjemenitscher.verein
        </ContactElement>
        <ContactElement iconName='phone'>
          <b>Telefon</b><br/>
          0176 341 263 24<br/>
          0178 239 9122
        </ContactElement>
        <ContactElement iconName='university'>
          <b>Spendenkonto</b><br/>
          IBAN: DE04 1005 0000 0190 6225 39<br/>
          SWIFT: BELADEBEXXX
        </ContactElement>
        <ContactElement iconName='envelope'>
          <b>E-Mail</b><br/>
          info@djv-hilfe.de
        </ContactElement>
        <ContactElement iconName='paypal'>
          <b>Paypal</b><br/>
          info@djv-hilfe.de
        </ContactElement>
      </div>
      <span className={footerStyles.copyright}>© DJV e.V. 2017 | <Link to="/impressum" className={footerStyles.copyrightLink}>Impressum</Link></span>
    </footer>
  )
}

export default Footer