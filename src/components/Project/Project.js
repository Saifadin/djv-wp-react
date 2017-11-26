import React from 'react'

const Project = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default Project
