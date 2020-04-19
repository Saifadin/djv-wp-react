import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Paypal } from '../../projects';
import ProjectSelect from '../DonationModal/ProjectSelect';
import CTAButton from '../CTAButton';
import donationModalStyles from './DonationBox.scss';

const DonateBox = ({ version = 1 }) => {
  const [activeProjects, setActiveProjects] = useState([]);
  const [permaProjects, setPermaProjects] = useState([]);
  const [selectedDonation, setSelectedDonation] = useState('');
  const [paypalId, setPaypalId] = useState('');

  const prepareProjects = (wpData, id) => {
    const projects = wpData.map((project) => {
      let preparedProject = {
        id: project.id,
        title: project.title.rendered,
      };
      return preparedProject;
    });
    if (id === 7) {
      setActiveProjects(projects);
    } else if (id === 8) {
      setPermaProjects(projects);
    }
  };

  const fetchProjects = () => {
    const categoryIds = [7, 8];
    categoryIds.forEach((id) => {
      axios.get('https://cms.djv-hilfe.de/wp-json/wp/v2/projects?categories=' + id).then((data) => {
        prepareProjects(data.data, id);
      });
    });
  };

  const onOptionChange = (changeEvent) => {
    let paypalId;

    Paypal.forEach((element) => {
      console.log(element);
      if (element.id === parseInt(changeEvent.target.value, 10)) {
        paypalId = element.paypalId;
      }
    });

    setPaypalId(paypalId);
    setSelectedDonation(changeEvent.target.value);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const donationUrl = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=' + paypalId;

  return (
    <div className={donationModalStyles.wrapper}>
      <h2 className={donationModalStyles.headline}>In zwei Schritten spenden:</h2>
      <h3 className={donationModalStyles.stepHeadline}>1. Spendenzweck auswählen:</h3>
      <div className={donationModalStyles.projects}>
        {activeProjects.map((project) => {
          return (
            <ProjectSelect
              key={project.id + 'active' + version}
              category="aktiv"
              index={project.id}
              version={version}
              project={project}
              checked={parseInt(selectedDonation, 10) === parseInt(project.id, 10)}
              onChange={onOptionChange}
            />
          );
        })}
        {permaProjects.map((project, index) => {
          return (
            <ProjectSelect
              key={project.id + 'permanent' + version}
              category="permanent"
              index={project.id}
              version={version}
              project={project}
              checked={parseInt(selectedDonation, 10) === parseInt(project.id, 10)}
              onChange={onOptionChange}
            />
          );
        })}
      </div>
      <div className={selectedDonation ? '' : donationModalStyles.disabled}>
        <h3 className={donationModalStyles.stepHeadline}>2. Über Paypal spenden: </h3>
        <CTAButton url={donationUrl} title="Jetzt Spenden" blank />
      </div>
    </div>
  );
};

export default DonateBox;
