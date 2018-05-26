import React, { Component } from 'react';
import axios from 'axios';
import uniqId from 'uniqid';

import CTAButton from '../../components/CTAButton';

import { Paypal } from '../../projects';

import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import PageSection from '../../components/PageSection';
import ProjectSelect from '../../components/DonationModal/ProjectSelect';
import FixedHeaderAfterScroll from '../../components/FixedHeaderAfterScroll';

import styles from './Donate.scss';

class AboutUs extends Component {
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
    categoryIds.forEach(id => {
      axios.get('https://cms.djv-hilfe.de/wp-json/wp/v2/projects?categories=' + id).then(data => {
        this.preparedProjects(data.data, id);
      });
    });
  }

  handleOptionChange(changeEvent) {
    let paypalId;

    Paypal.forEach(element => {
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
    const projects = wpData.map(project => {
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
    const { paypalId, selectedDonation, activeProjects, permaProjects } = this.state;
    const donationUrl = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=' + paypalId;

    return (
      <div>
        <PageHeader title="Spenden" bgImage="/assets/oldcity.jpg" />
        <FixedHeaderAfterScroll>
          <Header />
        </FixedHeaderAfterScroll>
        <PageSection fullWidth={true}>
          <div className={styles.wrapper}>
            <h2 className={styles.headline}>In zwei Schritten spenden:</h2>
            <h3 className={styles.stepHeadline}>1. Spendenzweck auswählen:</h3>
            <div className={styles.projects}>
              {activeProjects.map(project => {
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
            <div className={selectedDonation ? '' : styles.disabled}>
              <h3 className={styles.stepHeadline}>2. Über Paypal spenden: </h3>
              <CTAButton blank url={donationUrl} title="Jetzt Spenden" />
            </div>
          </div>
        </PageSection>
      </div>
    );
  }
}

export default AboutUs;
