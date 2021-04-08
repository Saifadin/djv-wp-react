import React, { useState, useEffect } from 'react';

import { Paypal } from '../../projects';
import ProjectRow from '../ProjectRow';

const ProjectContainer = ({ category, title, maxCount }) => {
  const [projects, setProjects] = useState([]);

  const prepareProjects = (data) => {
    const projects = data.map(({ id, title, subTitle, image }) => {
      let preparedProject = {
        id,
        title,
        image,
        description: subTitle,
      };
      return preparedProject;
    });
    setProjects(projects);
  };

  useEffect(() => {
    const project = Paypal.filter(({ type }) => type === category);
    prepareProjects(project);
  }, []);
  return projects.length > 0 && <ProjectRow title={title} projects={projects} maxCount={maxCount} />;
};

export default ProjectContainer;
