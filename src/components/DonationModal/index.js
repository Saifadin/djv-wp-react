import React, { Component } from 'react'
import Modal from 'react-modal'
import axios from 'axios'

import ProjectSelect from './ProjectSelect'
import CTAButton from '../CTAButton'
import donationModalStyles from './DonationModal.scss'

class DonationModal extends Component {
  constructor() {
    super();
    this.state = {
      activeProjects: [],
      permaProjects: [],
      selectedDonation: ''
    }

    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  componentWillMount() {
    const categoryIds = [
      7, 8
    ]
    categoryIds.forEach(id => {
      axios.get('https://djv-hilfe.de/wp-json/wp/v2/projects?categories=' + id ).then((data) => {
        this.preparedProjects(data.data, id)
      })
    })
  }

  handleOptionChange (changeEvent) {
    console.log(changeEvent.target.value)
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  preparedProjects(wpData, id) {
    const projects = wpData.map((project) => {
      const stripDiv = document.createElement('div')
      stripDiv.innerHTML = project.excerpt.rendered
      const strippedExcerpt = stripDiv.textContent || stripDiv.innerText || ''

      let preparedProject = {
        title: project.title.rendered,
        bgImage: project.better_featured_image ? project.better_featured_image.source_url : '/assets/yemen-topo.png',
        description: strippedExcerpt,
      }
      return preparedProject;
    })
    if (id === 7) {
      this.setState({
        activeProjects: projects
      })
    } else if (id === 8) {
      this.setState({
        permaProjects: projects
      })
    }
  }

  render() {
    const { isOpen, onCloseModal } = this.props
    const donationUrl = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=S7ZAP9MNV8EGU'

    return (
      <Modal
        key='modal'
        isOpen={isOpen}
        contentLabel='onRequestClose Example'
        className={donationModalStyles.modal}
        overlayClassName={donationModalStyles.overlay}
        onRequestClose={onCloseModal}
      >
        <div className={donationModalStyles.header}>
          <button className={['fa fa-times fa-2x', donationModalStyles.closeButton].join(' ')} onClick={onCloseModal} />
        </div>
        <div className={donationModalStyles.wrapper}>
          <h2 className={donationModalStyles.headline}>In zwei Schritten spenden:</h2>
          <h3 className={donationModalStyles.stepHeadline}>1. Spendenzweck auswählen:</h3>
          <div className={donationModalStyles.projects}>
            { this.state.activeProjects.map((project, index) => {
              return <ProjectSelect 
                        key={index} 
                        category='aktiv' 
                        index={index} 
                        project={project}
                        checked={this.state.selectedDonation === project.title} 
                        onChange={this.handleOptionChange}
                      />
            }) }
            { this.state.permaProjects.map((project, index) => {
              return <ProjectSelect 
                        key={index} 
                        category='permanent' 
                        index={index} 
                        project={project}
                        checked={this.state.selectedDonation === project.title} 
                        onChange={this.handleOptionChange}
                      />
            }) }
          </div>
          <h3 className={donationModalStyles.stepHeadline}>2. Über Paypal spenden: </h3>
          <CTAButton url={donationUrl} title='Jetzt Spenden' />
        </div>
      </Modal>
    )
  }
}

export default DonationModal