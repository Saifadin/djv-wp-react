import React from 'react'

import projectTeaserStyles from './ProjectTeaser.scss'

const ProjectTeaser = ({ project }) => (
  <div className={projectTeaserStyles.wrapper}>
    <div className={projectTeaserStyles.bgImage}>
      <img className={projectTeaserStyles.image} src={project.bgImage} alt={project.title} />
    </div>
    <div className={projectTeaserStyles.content}>
      <h4 className={projectTeaserStyles.title}>{project.title}</h4>
      <span className={projectTeaserStyles.description}>{project.description}</span>
    </div>
  </div>
)

export default ProjectTeaser
