import React from 'react';
import { Link } from 'react-router-dom';

import ContactElement from '../ContactElement';
import footerStyles from './Footer.scss';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <h2 className={footerStyles.headline}>Kontakt</h2>
      <div className={footerStyles.contactInfo}>
        <ContactElement iconName="address-book-o">
          <b>Adresse</b>
          <br />
          Martin-Opitz-Str. 25
          <br />
          13357 Berlin
        </ContactElement>
        <ContactElement iconName="facebook">
          <b>Facebook</b>
          <br />
          <a
            href="https://www.facebook.com/deutschjemenitischer.verein/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'black' }}>
            deutschjemenitischer.verein
          </a>
        </ContactElement>
        <ContactElement iconName="phone">
          <b>Telefon</b>
          <br />
          030 9151 6950
        </ContactElement>
        <ContactElement iconName="university">
          <b>Spendenkonto</b>
          <br />
          IBAN: DE04 1005 0000 0190 6225 39
          <br />
          SWIFT: BELADEBEXXX
        </ContactElement>
        <ContactElement iconName="envelope">
          <b>E-Mail</b>
          <br />
          info@djv-hilfe.de
        </ContactElement>
        <ContactElement iconName="paypal">
          <b>Paypal</b>
          <br />
          info@djv-hilfe.de
        </ContactElement>
      </div>
      <span className={footerStyles.copyright}>
        © DJV e.V. 2021 |{' '}
        <Link to="/impressum" className={footerStyles.copyrightLink}>
          Impressum
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
