import React, { Component } from 'react'

import Header from '../../components/Header'
import PageHeader from '../../components/PageHeader'
import PageSection from '../../components/PageSection'
import FixedHeaderAfterScroll from '../../components/FixedHeaderAfterScroll'

class ThankYou extends Component {
  render() {
    return (
      <div>
        <PageHeader title='Vielen Dank' bgImage='/assets/oldcity.jpg' />
        <FixedHeaderAfterScroll>
          <Header />
        </FixedHeaderAfterScroll>
        <PageSection fullWidth={true} title='Wir bedanken uns für Ihre Spende!'>
          <div className='textRow'>
            <p className='paragraph'>
              Ihre Spende wird für einen guten Zweck verwendet. Das garantieren wir. 
              Haben Sie noch weitere Fragen? Dann nutzen Sie die Kontaktmöglichkeiten weiter unten auf der Seite, 
              wir freuen uns mit Ihnen zu sprechen.
            </p>
          </div>
        </PageSection>
      </div>
    )
  }
}

export default ThankYou