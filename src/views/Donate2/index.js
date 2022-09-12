import React from 'react';

import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import PageSection from '../../components/PageSection';
import FixedHeaderAfterScroll from '../../components/FixedHeaderAfterScroll';

import styles from './Donate.scss';
import QuickDonateBox from '../../components/DonateBox';

const Donate = () => {
  return (
    <div>
      <PageHeader title="Spenden" bgImage="/assets/oldcity.jpg" />
      <FixedHeaderAfterScroll>
        <Header />
      </FixedHeaderAfterScroll>
      <PageSection min title="Jetzt spenden">
        <h2 className={styles.headline}>Per Banküberweisung</h2>
        <div className="textRow">
          <p className="paragraph">Geben Sie den Projektnamen als Verwendungszweck an.</p>
          <p className="paragraph">Das ist unsere Bankverbindung:</p>
          <p className="paragraph">
            Empfänger: DJV e.V.
            <br />
            IBAN: DE04 1005 0000 0190 6225 39
            <br />
            SWIFT/BIC: BELADEBEXXX
          </p>
        </div>
        <div className={styles.wrapper}>
          <QuickDonateBox modalTitle="Oder über Paypal" />
        </div>
      </PageSection>
    </div>
  );
};

export default Donate;
