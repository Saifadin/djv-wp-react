import React from 'react';

import Header from '../../components/Header'
import PageSection from '../../components/PageSection'
import FixedHeaderAfterScroll from '../../components/FixedHeaderAfterScroll'
import homeStyles from './Home.scss'

const Home = () => {
  return (
    <div className={homeStyles.home}>
      <section className={homeStyles.headSection}>
        <div className={homeStyles.headBg}>
          <img src='/assets/yemen-topo.png' alt='yemen' className={homeStyles.headBgImage} />
        </div>
        <div className={homeStyles.headContentWrapper}>
          <div className={homeStyles.headContent}>
            <img src='/Logo.png' alt='djv-logo' className={homeStyles.headLogo}/>
            <h1 className={homeStyles.headTitle}>Deutsch-Jemenitischer Verein für Hilfe und Entwicklung e.V.</h1>
          </div>
        </div>
      </section>
      <FixedHeaderAfterScroll>
        <Header />
      </FixedHeaderAfterScroll>
      <PageSection title='Über Uns'>
        <p className={homeStyles.text}>
          Der Deutsch-jemenitische Verein für Hilfe und Entwicklung ist ein ehrenamtlicher Gesellschaftsverein, 
          der 2013 offiziell in Deutschland gegründet wurde.
        </p>
        <p className={homeStyles.text}>
          Unser großes Ziel ist es, eine Brücke zwischen den Bedürftigen im Jemen und den Spendern aus Deutschland und Europa 
          zu etablieren.
        </p>
      </PageSection>
      <PageSection title='Ziele'>
        <p className={homeStyles.text}>
          Die Minderung der schwierigen Umstände der jemenitischen Bevölkerung, sowie die Zusicherung der 
          humanitären Hilfen in allen Teilen des Jemens ist unsere Priorität.
        </p>
        <p className={homeStyles.text}>
          Das wollen wir erreichen 
          durch soziale, finanzielle und kulturelle Unterstützung hilfsbedürftiger Familien und der Umsetzung 
          von Entwickelungsprojekten in den betroffenen Gebieten.
        </p>
      </PageSection>
      <PageSection title='Unsere Aktivitäten'>

      </PageSection>
      <PageSection title='Projekte'></PageSection>
    </div>
  );
};

export default Home;