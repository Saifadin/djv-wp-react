import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import uniqId from 'uniqid';

import ProjectSelect from './ProjectSelect';
import CTAButton from '../CTAButton';

import { Paypal } from '../../projects';

import donationModalStyles from './DonationModal.scss';

class DonationModal extends Component {
  constructor() {
    super();
    this.state = {
      activeProjects: [],
      permaProjects: [],
      selectedDonation: '',
      paypalId: '',
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  componentWillMount() {
    const categoryIds = [7, 8];
    categoryIds.forEach((id) => {
      axios.get('https://cms.djv-hilfe.de/wp-json/wp/v2/projects?categories=' + id).then((data) => {
        this.preparedProjects(data.data, id);
      });
    });
  }

  handleOptionChange(changeEvent) {
    let paypalId;

    Paypal.forEach((element) => {
      if (element.id === parseInt(changeEvent.target.value, 10)) {
        paypalId = element.paypalId;
      }
    });

    this.setState({
      selectedDonation: changeEvent.target.value,
      paypalId: paypalId,
    });
  }

  preparedProjects(wpData, id) {
    const projects = wpData.map((project) => {
      let preparedProject = {
        id: project.id,
        title: project.title.rendered,
      };
      return preparedProject;
    });
    if (id === 7) {
      this.setState({
        activeProjects: projects,
      });
    } else if (id === 8) {
      this.setState({
        permaProjects: projects,
      });
    }
  }

  render() {
    const { isOpen, onCloseModal } = this.props;
    const { paypalId, selectedDonation, activeProjects, permaProjects } = this.state;
    const donationUrl = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=' + paypalId;

    return (
      <Modal
        key="modal"
        isOpen={isOpen}
        contentLabel="onRequestClose Example"
        className={donationModalStyles.modal}
        overlayClassName={donationModalStyles.overlay}
        ariaHideApp={false}
        onRequestClose={onCloseModal}>
        <div className={donationModalStyles.header}>
          <button className={['fa fa-times fa-2x', donationModalStyles.closeButton].join(' ')} onClick={onCloseModal} />
        </div>
        <div className={donationModalStyles.wrapper}>
          <h2 className={donationModalStyles.headline}>In zwei Schritten spenden:</h2>
          <h3 className={donationModalStyles.stepHeadline}>1. Spendenzweck auswählen:</h3>
          <div className={donationModalStyles.projects}>
            {activeProjects.map((project) => {
              return (
                <ProjectSelect
                  key={uniqId()}
                  category="aktiv"
                  index={project.id}
                  project={project}
                  checked={parseInt(selectedDonation, 10) === parseInt(project.id, 10)}
                  onChange={this.handleOptionChange}
                />
              );
            })}
            {permaProjects.map((project, index) => {
              return (
                <ProjectSelect
                  key={uniqId()}
                  category="permanent"
                  index={project.id}
                  project={project}
                  checked={parseInt(selectedDonation, 10) === parseInt(project.id, 10)}
                  onChange={this.handleOptionChange}
                />
              );
            })}
          </div>
          <div className={selectedDonation ? '' : donationModalStyles.disabled}>
            <h3 className={donationModalStyles.stepHeadline}>2. Über Paypal spenden: </h3>
            <CTAButton url={donationUrl} title="Jetzt Spenden" />
          </div>
        </div>
      </Modal>
    );
  }
}

export default DonationModal;
