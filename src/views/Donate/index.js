import React from 'react';

import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import PageSection from '../../components/PageSection';
import FixedHeaderAfterScroll from '../../components/FixedHeaderAfterScroll';

import styles from './Donate.scss';
import DonateBox from '../../components/DonateBox';

const Donate = () => {
  return (
    <div>
      <PageHeader title="Spenden" bgImage="/assets/oldcity.jpg" />
      <FixedHeaderAfterScroll>
        <Header />
      </FixedHeaderAfterScroll>
      <PageSection fullWidth={true}>
        <div className={styles.wrapper}>
          <DonateBox />
        </div>
      </PageSection>
    </div>
  );
};

export default Donate;
