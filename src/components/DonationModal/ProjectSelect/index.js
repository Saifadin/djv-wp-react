import React from 'react';

import projectSelectStyles from './ProjectSelect.scss';

const ProjectSelect = ({ project, index, version, checked, onChange }) => {
  return (
    <label className={projectSelectStyles.wrapper} htmlFor={`project-${index}-${version}`}>
      <input
        className={projectSelectStyles.radio}
        type="radio"
        value={project.id}
        name={`donation-project-${version}`}
        id={`project-${index}-${version}`}
        onChange={onChange}
        checked={checked}
      />
      <span className={projectSelectStyles.box}>{project.title}</span>
    </label>
  );
};

export default ProjectSelect;
