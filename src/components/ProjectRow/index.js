import React from 'react'
import uniqId from 'uniqid'

import projectRowStyles from './ProjectRow.scss'
import ProjectTeaser from './ProjectTeaser'

const ProjectRow = ({ title, projects, maxCount }) => (
  <div className={projectRowStyles.wrapper}>
    { title && <h3 className={projectRowStyles.title}>{title}</h3> }
    <div className={projectRowStyles.projectWrapper}>
      {projects.map((project, index) => {
        if (maxCount) {
          return maxCount > index && <ProjectTeaser key={uniqId()} project={project} />
        } else {
          return <ProjectTeaser key={uniqId()} project={project} />
        }
      })}
    </div>
  </div> 
)

export default ProjectRow
