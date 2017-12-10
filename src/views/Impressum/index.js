import React, { Component } from 'react'

import Header from '../../components/Header'
import PageHeader from '../../components/PageHeader'
import PageSection from '../../components/PageSection'
import FixedHeaderAfterScroll from '../../components/FixedHeaderAfterScroll'

import impressumStyles from './Impressum.scss'

class Impressum extends Component {
  render() {
    return (
      <div>
        <PageHeader title='Impressum' bgImage='/assets/oldcity.jpg' />
        <FixedHeaderAfterScroll>
          <Header />
        </FixedHeaderAfterScroll>
        <PageSection fullWidth={false} title='Impressum'>
          <div className={['textRow', impressumStyles.wrapper].join(' ')}>
            <h2>Impressum</h2>
            <h3>Angaben gemäß &sect; 5 TMG:</h3>
            <p>Deutsch-Jemenitischer Verein für Hilfe und Entwicklung e.V.<br /> Drontheimer Str. 32A<br /> 13359 Berlin</p>
            <h3>Vertreten durch:</h3>
            <p>Herr Dr. Aniss Aldoaiss<br /> Herr Dr. Ahmed Al-Khameri</p>
            <h3>Kontakt:</h3> 
            <p>Telefon: +49 (0) 176 341 263 24<br /> E-Mail: info@djv-hilfe.de</p>
            <h3>Registereintrag:</h3> 
            <p>Eintragung im Vereinsregister. <br /> Registergericht: Amtsgericht Berlin <br /> Registernummer: HRB 999999</p>
            <h3> Haftung fürr Inhalte</h3> 
            <p>Als Diensteanbieter sind wir gemäß &sect; 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p> 
            <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p> 
            <h3>Haftung für Links</h3>
            <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p> 
            <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p> 
            <h3>Urheberrecht</h3> 
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p> 
            <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p> 
          </div>
        </PageSection>
      </div>
    )
  }
}

export default Impressum