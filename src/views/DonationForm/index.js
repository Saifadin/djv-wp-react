import React from 'react';

import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import PageSection from '../../components/PageSection';
import FixedHeaderAfterScroll from '../../components/FixedHeaderAfterScroll';

import styles from './DonationForm.scss';

const Input = ({ name, label }) => (
  <div className={styles.InputWrapper}>
    <label htmlFor={name} className={styles.Label}>
      {label}
    </label>
    <input type="text" name={name} id={name} className={styles.Input} />
  </div>
);

const DontaionFormPage = () => {
  return (
    <div>
      <PageHeader title="Spendenbescheinigung" bgImage="/assets/oldcity.jpg" />
      <FixedHeaderAfterScroll>
        <Header />
      </FixedHeaderAfterScroll>
      <PageSection title="Jetzt beantragen">
        <form name="spendenbescheinigung" method="post" className={styles.Form}>
          <input type="hidden" name="form-name" value="spendenbescheinigung" />

          {/* <div className={styles.InputWrapper}>
            <label htmlFor="firstName" className={styles.Label}>
              Vorname
            </label>
            <input type="text" name="firstName" id="firstName" className={styles.Input} />
          </div> */}
          <Input name="firstName" label="Vorname" />
          <Input name="lastName" label="Nachname" />
          <Input name="email" label="Email" />
          <Input name="address" label="Straße und Hausnummer" />
          <Input name="postalCode" label="PLZ" />
          <Input name="city" label="Stadt" />
          <button type="submit" className={styles.Button}>
            Abschicken
          </button>
        </form>
      </PageSection>
    </div>
  );
};

export default DontaionFormPage;
