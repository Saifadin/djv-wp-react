import React, { useContext } from 'react';

import ModalContext from '../../contexts/ModalContext';
import Header from '../../components/Header';
import PageSection from '../../components/PageSection';
import ProjectCategory from '../../components/ProjectCategory';
import ProjectContainer from '../../components/ProjectContainer';
import ProjectSelect from '../../components/DonationModal/ProjectSelect';
import CTAButton from '../../components/CTAButton';
import FixedHeaderAfterScroll from '../../components/FixedHeaderAfterScroll';
import homeStyles from './Home.scss';
import DonateBox from '../../components/DonateBox';

const Home = () => {
  const { toggleModal } = useContext(ModalContext);

  const openDonationModal = () => {
    toggleModal(true, 'donation');
  };

  return (
    <div className={homeStyles.home}>
      <section className={homeStyles.headSection}>
        <div className={homeStyles.headBg}>
          <img src="/assets/yemen-topo.png" alt="yemen" className={homeStyles.headBgImage} />
        </div>
        <div className={homeStyles.headContentWrapper}>
          <div className={homeStyles.headContent}>
            <img src="/Logo.png" alt="djv-logo" className={homeStyles.headLogo} />
            <h1 className={homeStyles.headTitle}>Deutsch-Jemenitischer Verein für Hilfe und Entwicklung e.V.</h1>
            <button className={homeStyles.donationButton} onClick={openDonationModal}>
              <span>Jetzt Spenden</span>
            </button>
          </div>
        </div>
      </section>
      <FixedHeaderAfterScroll>
        <Header />
      </FixedHeaderAfterScroll>
      <PageSection fullWidth={true} bgImage="/assets/oldcity.jpg" bgImagePosition="right" title="Kurban 2020">
        <div className="textRow">
          <p className="paragraph">
            Jährlich zum Opferfest, welches direkt nach der Pilgerfahrt stattfindet, sind Muslime dazu verpflichtet ein Opfer (Kurban) zu
            bringen. Dies wird als Erinnerung an die Geschichte von Abraham und Ismail gemacht. Dieses Opfer soll mindestens zu einem
            Drittel an Bedürftige verteilt werden.
          </p>
          <p className="paragraph">
            Wenn Sie Ihr Kurban für die Menschen im Jemen geben wollen, spenden Sie an uns und setzen Sie sich mit uns in Verbindung. Wir
            haben Partner vor Ort, die bereit sind so viele Menschen, wie möglich mit Fleisch zu versorgen.
          </p>
          <ProjectSelect title="Jetzt spenden" url="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2R2YFCRMF5ALS" />
        </div>
        <div className="textRow">
          <img src="/assets/Kurban-plakat.jpeg" alt="Kurban Projekt" className={homeStyles.image} />
        </div>
        <DonateBox version="Donation1" />
      </PageSection>
      <PageSection fullWidth={true} bgImage="/assets/oldcity.jpg" title="Über Uns">
        <div className="textRow">
          <p className="paragraph">
            Der Deutsch-Jemenitische Verein für Hilfe und Entwicklung ist ein ehrenamtlicher Gesellschaftsverein, der 2013 offiziell in
            Deutschland gegründet wurde, um der humanitären Lage im Jemen entgegen zu wirken. 24 Millionen Menschen, 80% der Bevölkerung,
            benötigt humanitäre Hilfe.
          </p>
          <p className="paragraph">
            Wir möchten eine Brücke zwischen den Bedürftigen im Jemen und Spendern aus Deutschland und Europa etablieren. Dadurch können wir
            das Leid im Jemen reduzieren und einen Teil dazu beitragen, dass diese humanitäre Katastrophe überwunden werden kann.
          </p>
        </div>
        <CTAButton title="Mehr Über Uns" url="/ueber-uns" />
      </PageSection>
      <PageSection fullWidth={true} bgImage="/assets/kinder-jemen.jpg" bgImagePosition="right" title="Ziele">
        <div className="textRow">
          <p className="paragraph">
            Die Minderung der schwierigen Umstände der jemenitischen Bevölkerung, sowie die Zusicherung der humanitären Hilfen in allen
            Teilen des Jemens ist unsere Priorität.
          </p>
          <p className="paragraph">
            Das wollen wir erreichen durch soziale, finanzielle und kulturelle Unterstützung hilfsbedürftiger Familien und der Umsetzung von
            Entwickelungsprojekten in den betroffenen Gebieten.
          </p>
          <div>
            <button className={homeStyles.donationButton} onClick={openDonationModal}>
              <span>Jetzt Spenden</span>
            </button>
          </div>
        </div>
      </PageSection>
      <PageSection title="Projekte">
        <div className={homeStyles.projectCategories}>
          <ProjectCategory title="Nahrungsmittelhilfe" iconName="food" />
          <ProjectCategory title="Erste-Hilfe-Kampagnen" iconName="aid" />
          <ProjectCategory title="Medizinische Versorgung vor Ort" iconName="yemen" />
          <ProjectCategory title="Waisenpatenschaften" iconName="orphan" />
        </div>

        <ProjectContainer title="Aktive Projekte" maxCount={4} category="active" />
        <ProjectContainer title="Permanente Projekte" maxCount={4} category="permanent" />

        <DonateBox version="Donation2" />
      </PageSection>
    </div>
  );
};

export default Home;
