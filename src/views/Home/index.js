import React, { useContext } from 'react';

import ModalContext from '../../contexts/ModalContext';
import Header from '../../components/Header';
import PageSection from '../../components/PageSection';
import ProjectCategory from '../../components/ProjectCategory';
import ProjectContainer from '../../components/ProjectContainer';
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
      <PageSection fullWidth={true} title="Kurban-Projekt 2022" bgImage="/assets/shibam-yemen.jpg">
        <div className="textRow">
          <p className="paragraph">
            Mit Allahs Erlaubnis hat die DJV, am Dienstag, den 12.Juli.2022, alle Phasen des Kurban-Projekts für das Jahr 2022 in mehreren
            jemenitischen Provinzen abgeschlossen. Zudem wurden alle Opfer, die zum Verein ankamen, zum richtigen Zeitpunkt durchgeführt.
          </p>
          <p className="paragraph">
            Dieses Projekt wurde in den Provinzen Lahj, Ma'rib, Ta'iz, Hadramout und Sana'a durchgeführt. Der Verein setzte den Fokus auf
            arme Familien in den genannten Provinzen. Arme Familien in den Flüchtlingslagern hatten Vorang. Die Anzahl der Opfergaben, die
            vollzogen wurden, waren 300, womit ca. 2200 arme Familien ernährt wurden.
          </p>
          <p className="paragraph">
            Ziel des Projektes war, die Reduzierung des menschlichen Leidens, womit viele in der jemenitischen Bevölkerung zu kämpfen haben.
            Das liegt an den Lebensumständen, der wirtschaftlichen Verschlechterung und der Verbreitung der Arbeitslosigkeit und Armut.
          </p>
          <p className="paragraph">
            Die DJV bedankt sich sehr für alle unterstützenden Brüder und Schwestern, die dieses Projekt mit Geld oder Anstrengung
            unterstützt haben.
          </p>
          <p className="paragraph">
            Und wir bitten Allah dass er von allen ihren Einsatz, Aufwand und Mühe annimmt und ihnen diese Taten in der Waage der guten
            Taten zuschreibt.
          </p>
          <p className="paragraph">
            Hinweis: Die Brüder und Schwestern, die eine Dokumentation für die Durchführung des Kurbans erhalten möchten, können sich bei
            uns melden und uns ihre Whatsapp-Nummer oder Email schciekn, dann wird ihnen das zugeschickt.
          </p>
        </div>
      </PageSection>
      <PageSection fullWidth={true}>
        <div className={homeStyles.imageGrid}>
          <img src="/assets/kurban1.jpeg" alt="Kurban Bilder" />
          <img src="/assets/kurban2.jpeg" alt="Kurban Bilder" />
          <img src="/assets/kurban3.jpeg" alt="Kurban Bilder" />
          <img src="/assets/kurban4.jpeg" alt="Kurban Bilder" />
          <img src="/assets/kurban5.jpeg" alt="Kurban Bilder" />
          <img src="/assets/kurban6.jpeg" alt="Kurban Bilder" />
        </div>
      </PageSection>
      <PageSection fullWidth={true} bgImage="/assets/oldcity.jpg" bgImagePosition="right" title="Unterstütze uns jetzt">
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

        <ProjectContainer title="Aktive Projekte" maxCount={5} category="active" />
        <ProjectContainer title="Permanente Projekte" maxCount={6} category="permanent" />

        <DonateBox version="Donation2" />
      </PageSection>
    </div>
  );
};

export default Home;
