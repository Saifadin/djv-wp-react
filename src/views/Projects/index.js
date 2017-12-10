import React, { Component } from 'react'

import Header from '../../components/Header'
import PageHeader from '../../components/PageHeader'
import PageSection from '../../components/PageSection'
import ProjectCategory from '../../components/ProjectCategory'
import ProjectContainer from '../../components/ProjectContainer'
import FixedHeaderAfterScroll from '../../components/FixedHeaderAfterScroll'

import projectStyles from './Projects.scss'

class Projects extends Component {
  render() {
    return (
      <div>
        <PageHeader title="Projekte" bgImage="/assets/shibam-yemen.jpg" />

        <FixedHeaderAfterScroll>
          <Header />
        </FixedHeaderAfterScroll>

        <PageSection title='Unsere Arbeit'>
          <div className={projectStyles.projectCategories}>
            <ProjectCategory title='Nahrungs-mittelhilfe' iconName='food' />
            <ProjectCategory title='Erste-Hilfe-Kampagnen' iconName='aid' />
            <ProjectCategory title='Medizinische Versorgung vor Ort' iconName='yemen' />
            <ProjectCategory title='Waisen-patenschaften' iconName='orphan' />
          </div>
          <div className='textRow'>
            <p className='paragraph'>
              Seit 2013 bemüht sich der DJV e.V. darum, die Lage der jemenitischen Bevölkerung in Kriegszeiten zu verbessern. Dies wird
              hauptsächlich mit Projekten umgesetzt, die zeitaktuell sind und dringend benötigt werden, zum Beispiel als das Dengue-Fieber
              im Jemen ausbrach. In Kooperation mit diversen Vereinen wurden Spenden für Medikamente und medizinische Ausrüstungen gesammelt.
            </p>
            <p className='paragraph'>
              Mit Ihrer Unterstützung können wir noch bessere Unterstützung für die jemenitische Bevölkerung garantieren. Jede Spende hilft
              uns dabei, noch mehr Menschen zu erreichen und weitere Partner zu gewinnen. Wir garantieren Ihnen, dass Ihre Spende im Jemen
              ankommt, da wir auf Ehrenamts-Basis arbeiten.
            </p>
          </div>
        </PageSection>

        <PageSection title='Aktive Projekte'>
          <ProjectContainer category='aktiv' />
        </PageSection>
        
        <PageSection title='Permanente Projekte'>
          <ProjectContainer category='permanent' />
        </PageSection>
      </div>
    )
  }
}

export default Projects