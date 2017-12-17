import React, { Component } from 'react'

import Header from '../../components/Header'
import PageHeader from '../../components/PageHeader'
import PageSection from '../../components/PageSection'
import ProjectCategory from '../../components/ProjectCategory'
import Board from '../../components/Board'
import FixedHeaderAfterScroll from '../../components/FixedHeaderAfterScroll'

import styles from './AboutUs.scss'

class AboutUs extends Component {
  render() {
    return (
      <div>
        <PageHeader title='Über Uns' bgImage='/assets/oldcity.jpg' />
        <FixedHeaderAfterScroll>
          <Header />
        </FixedHeaderAfterScroll>
        <PageSection fullWidth={true} title='Über Uns'>
          <div className='textRow'>
            <p className='paragraph'>
              Der Deutsch-Jemenitische Verein für Hilfe und Entwicklung ist eine Organisation die im Jahre 2013 in Deutschland gegründet wurde. 
              Ihr Ziel ist es die Situation und Umstände des jemenitischen Volkes zu verbessern und spezialisiert hat sich der DJV auf die Hilfe 
              von den Armen und den Hilflosen in allen Teilen des Jemens.            
            </p>
            <p className='paragraph'>
              Außerdem bezweckt der Verein die Verbesserung des gesellschaftlichen Fortschritts von armen Regionen durch Entwicklungsprogramme für 
              die Wirtschaft und der humanitären Lage mit lokalen Organisationen und Vereinen.            
            </p>
            <p className='paragraph'>
              Die vier Hauptbereiche der Arbeit des DJV sind:
            </p>
          </div>
          <div className={styles.projectCategories}>
            <ProjectCategory title='Nahrungsmittelhilfe' iconName='food' />
            <ProjectCategory title='Erste-Hilfe-Kampagnen' iconName='aid' />
            <ProjectCategory title='Medizinische Versorgung vor Ort' iconName='yemen' />
            <ProjectCategory title='Waisenpatenschaften' iconName='orphan' />
          </div>
        </PageSection>
        <PageSection title='Vorstand'>
          <div className='textRow'>
            <Board />
          </div>
        </PageSection>
      </div>
    )
  }
}

export default AboutUs