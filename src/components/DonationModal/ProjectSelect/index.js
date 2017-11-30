import React from 'react'

import projectSelectStyles from './ProjectSelect.scss'

const ProjectSelect = ({ project, index, category, checked, onChange }) => {
  return (
    <label className={projectSelectStyles.wrapper} htmlFor={`project-${category}-${index}`}>
      <input 
        className={projectSelectStyles.radio}
        type='radio' value={project.title}
        name={`donation-project`}
        id={`project-${category}-${index}`}
        onChange={onChange}
      />
      <span className={projectSelectStyles.box}>{project.title}</span>
    </label>
  )
}

export default ProjectSelect