import React from 'react';
import { Link } from 'react-router-dom';

import projectTeaserStyles from './ProjectTeaser.scss';

const ProjectTeaser = ({ project }) => {
  return (
    <Link to={`/projekt/${project.id}`} className={projectTeaserStyles.wrapper}>
      <div className={projectTeaserStyles.bgImage}>
        <img className={projectTeaserStyles.image} src={project.image} alt={project.title} />
      </div>
      <div className={projectTeaserStyles.content}>
        <h4 className={projectTeaserStyles.title}>{project.title}</h4>
        <span className={projectTeaserStyles.description}>{project.description}</span>
      </div>
    </Link>
  );
};
export default ProjectTeaser;
