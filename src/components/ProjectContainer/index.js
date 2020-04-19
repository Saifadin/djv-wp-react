import React, { Component } from 'react';
import axios from 'axios';

import ProjectRow from '../ProjectRow';

class ProjectContainer extends Component {
  state = {
    projects: [],
  };

  componentWillMount() {
    const categoryIds = {
      aktiv: 7,
      permanent: 8,
    };
    axios.get('https://cms.djv-hilfe.de/wp-json/wp/v2/projects?categories=' + categoryIds[this.props.category]).then((data) => {
      this.prepareProjects(data.data);
    });
  }

  prepareProjects(wpData) {
    const projects = wpData.map((project) => {
      const stripDiv = document.createElement('div');
      stripDiv.innerHTML = project.excerpt.rendered;
      const strippedExcerpt = stripDiv.textContent || stripDiv.innerText || '';

      let preparedProject = {
        id: project.id,
        title: project.title.rendered,
        bgImage: project.better_featured_image ? project.better_featured_image.source_url : '/assets/yemen-topo.png',
        description: strippedExcerpt,
      };
      return preparedProject;
    });
    this.setState({
      projects: projects,
    });
  }

  render() {
    return (
      this.state.projects.length > 0 && (
        <ProjectRow title={this.props.title} projects={this.state.projects} maxCount={this.props.maxCount} />
      )
    );
  }
}

export default ProjectContainer;
