import React from 'react';

import projectSelectStyles from './ProjectSelect.scss';

const ProjectSelect = ({ title, index, version, checked, onChange, url }) => {
  return (
    <a className={projectSelectStyles.wrapper} href={url} target="_blank">
      <span className={projectSelectStyles.box}>{title}</span>
    </a>
  );
};

export default ProjectSelect;
