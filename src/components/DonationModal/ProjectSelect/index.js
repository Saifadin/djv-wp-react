import React from 'react'

import projectSelectStyles from './ProjectSelect.scss'

const ProjectSelect = ({ project, index, category, checked, onChange }) => {
  return (
    <label className={projectSelectStyles.wrapper} htmlFor={`project-${index}`}>
      <input 
        className={projectSelectStyles.radio}
        type='radio'
        value={project.id}
        name={`donation-project`}
        id={`project-${index}`}
        onChange={onChange}
        checked={checked}
      />
      <span className={projectSelectStyles.box}>{project.title}</span>
    </label>
  )
}

export default ProjectSelect