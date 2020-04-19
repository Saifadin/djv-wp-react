import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProjectRow from '../ProjectRow';
import { serverUrl } from '../../server';

const ProjectContainer = ({ category, title, maxCount }) => {
  const [projects, setProjects] = useState([]);

  const prepareProjects = (data) => {
    const projects = data.map(({ id, title, subTitle, image }) => {
      let preparedProject = {
        id,
        title,
        bgImage: image && image[0] && image[0].url,
        description: subTitle,
      };
      return preparedProject;
    });
    setProjects(projects);
  };

  useEffect(() => {
    axios.get(`${serverUrl}/projects?type=${category}`).then(({ data }) => {
      prepareProjects(data);
    });
  }, []);
  return projects.length > 0 && <ProjectRow title={title} projects={projects} maxCount={maxCount} />;
};

export default ProjectContainer;
