import React, { Component } from 'react'
import axios from 'axios'

import Header from '../../components/Header'
import PageHeader from '../../components/PageHeader'
import PageSection from '../../components/PageSection'
import CTAButton from '../../components/CTAButton'
import FixedHeaderAfterScroll from '../../components/FixedHeaderAfterScroll'

import projectStyles from './Project.scss'

class Project extends Component {
  state = {
    project: {
      id: '',
      title: '',
      bgImage: '',
      content: '',
    }
  }

  componentWillMount() {
    const { match } = this.props
    axios.get('https://djv-hilfe.de/wp-json/wp/v2/projects/' + match.params.id ).then((data) => {
      let preparedProject = {
        id: data.data.id,
        title: data.data.title.rendered,
        bgImage: data.data.better_featured_image ? data.data.better_featured_image.source_url : '/assets/yemen-topo.png',
        content: data.data.content.rendered,
      }
      
      this.setState({
        project: preparedProject
      })
    })
  }

  render() {
    const { project } = this.state
    const { goBack } = this.props.history
    return (
      <div>
        <PageHeader title={project.title} bgImage={project.bgImage} />

        <FixedHeaderAfterScroll>
          <Header />
        </FixedHeaderAfterScroll>

        <PageSection>
          <div className='textRow'>
            <a className={projectStyles.goBack} onClick={goBack}>Zurück</a>
          </div>
          <div className={projectStyles.renderedContent} dangerouslySetInnerHTML={{__html: project.content}} />
          <CTAButton title='Jetzt Spenden' url='' />
        </PageSection>
      </div>
    )
  }
}

export default Project