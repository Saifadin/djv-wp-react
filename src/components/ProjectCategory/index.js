import React from 'react'

import projectCategoryStyles from './ProjectCategory.scss'

const ProjectCategory = ({ title, iconName }) => (
  <div className={projectCategoryStyles.wrapper}>
    <div className={projectCategoryStyles.sizeWrapper}>
      <div className={projectCategoryStyles.iconWrapper}>
        <img className={projectCategoryStyles.icon} src={`/assets/${iconName}.svg`} alt={title} />
      </div>
      <span className={projectCategoryStyles.title}>{title}</span>
    </div>
  </div>
)

export default ProjectCategory
