import React, { useEffect, useState } from 'react';

import { Paypal } from '../../projects';
import ProjectSelect from '../DonationModal/ProjectSelect';
import donationModalStyles from './DonationBox.scss';

const DonateBox = ({ version = 1, tag, modalTitle }) => {
  const [activeProjects, setActiveProjects] = useState([]);
  const [permaProjects, setPermaProjects] = useState([]);

  const prepareProjects = (data, id) => {
    const projects = data.map((project) => {
      let preparedProject = {
        id: project.id,
        title: project.title,
      };
      return preparedProject;
    });
    if (tag) {
      setActiveProjects(projects);
      setPermaProjects([]);
    } else {
      if (id === 'active') {
        setActiveProjects(projects);
      } else if (id === 'permanent') {
        setPermaProjects(projects);
      }
    }
  };

  const fetchProjects = () => {
    const categoryIds = ['active', 'permanent'];
    if (tag) {
      const project = Paypal.filter(({ tags }) => tags.includes(tag));
      prepareProjects(project, '');
    } else {
      categoryIds.forEach((id) => {
        const project = Paypal.filter(({ type }) => type === id);
        prepareProjects(project, id);
      });
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className={donationModalStyles.wrapper}>
      <h2 className={donationModalStyles.headline}>{modalTitle || 'Ganz einfach spenden:'}</h2>
      <h3 className={donationModalStyles.stepHeadline}>Wähle den Spendenzweck aus und bezahl mit Paypal!</h3>
      <div className={donationModalStyles.projects}>
        {activeProjects.map((project) => {
          const paypalObj = Paypal.find(({ id }) => id === project.id);

          return (
            <ProjectSelect
              key={project.id + 'active' + version}
              title={project.title}
              url={'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=' + paypalObj.paypalId}
            />
          );
        })}
        {permaProjects.map((project, index) => {
          const paypalObj = Paypal.find(({ id }) => id === project.id);

          return (
            <ProjectSelect
              key={project.id + 'permanent' + version}
              title={project.title}
              url={'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=' + paypalObj.paypalId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DonateBox;
