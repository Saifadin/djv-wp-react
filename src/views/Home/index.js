import React from 'react';

import Header from '../../components/Header'
import PageSection from '../../components/PageSection'
import ProjectCategory from '../../components/ProjectCategory'
import ProjectContainer from '../../components/ProjectContainer'
import BoardImageRow from '../../components/BoardImageRow'
import CTAButton from '../../components/CTAButton'
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
      <PageSection fullWidth={true} bgImage='/assets/oldcity.jpg' title='Über Uns'>
        <BoardImageRow />
        <div className='textRow'>
          <p className='paragraph'>
            Der Deutsch-jemenitische Verein für Hilfe und Entwicklung ist ein ehrenamtlicher Gesellschaftsverein, 
            der 2013 offiziell in Deutschland gegründet wurde.
          </p>
          <p className='paragraph'>
            Unser großes Ziel ist es, eine Brücke zwischen den Bedürftigen im Jemen und den Spendern aus Deutschland und Europa 
            zu etablieren.
          </p>
        </div>
        <CTAButton title='Mehr Über Uns' url='/ueber-uns' />
      </PageSection>
      <PageSection fullWidth={true} bgImage='/assets/kinder-jemen.jpg' bgImagePosition='right' title='Ziele'>
        <div className='textRow'>
          <p className='paragraph'>
            Die Minderung der schwierigen Umstände der jemenitischen Bevölkerung, sowie die Zusicherung der 
            humanitären Hilfen in allen Teilen des Jemens ist unsere Priorität.
          </p>
          <p className='paragraph'>
            Das wollen wir erreichen 
            durch soziale, finanzielle und kulturelle Unterstützung hilfsbedürftiger Familien und der Umsetzung 
            von Entwickelungsprojekten in den betroffenen Gebieten.
          </p>
        </div>
      </PageSection>
      <PageSection title='Projekte'>
        <div className={homeStyles.projectCategories}>
          <ProjectCategory title='Nahrungsmittelhilfe' iconName='food' />
          <ProjectCategory title='Erste-Hilfe-Kampagnen' iconName='aid' />
          <ProjectCategory title='Medizinische Versorgung vor Ort' iconName='yemen' />
          <ProjectCategory title='Waisenpatenschaften' iconName='orphan' />
        </div>

        <ProjectContainer title='Aktive Projekte' maxCount={4} category='aktiv' />
        <ProjectContainer title='Permanente Projekte' maxCount={4} category='permanent' />
      </PageSection>
    </div>
  );
};

export default Home;