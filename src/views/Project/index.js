import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import PageSection from '../../components/PageSection';
import CTAButton from '../../components/CTAButton';
import FixedHeaderAfterScroll from '../../components/FixedHeaderAfterScroll';

import { Paypal } from '../../projects';

import projectStyles from './Project.scss';

const Project = ({ history: { goBack }, match }) => {
  const [project, setProject] = useState({});
  const [paypalId, setPaypalId] = useState('');
  const paypalUrl = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=' + paypalId;

  useEffect(() => {
    const project = Paypal.find(({ id }) => id + '' === match.params.id);
    setProject(project);
    setPaypalId(project.paypalId);
  }, []);

  return (
    <div>
      <Helmet>
        <title>{`${project.title} | DJV e.V. | Ihre Spende kann vieles Bewirken`}</title>
        <meta property="title" content="Ramadan mit einer Spende abschließen 🌙" />
        <meta property="image" content={project.image} />
        <meta property="description" content={project.text} />
        <meta property="og:title" content={project.id === 9 ? 'Ramadan mit einer Spende abschließen 🌙' : project.title} />
        <meta property="og:image" content={project.image} />
        <meta property="og:description" content={project.content} />
      </Helmet>
      <PageHeader title={project.title} bgImage={project.image} />

      <FixedHeaderAfterScroll>
        <Header />
      </FixedHeaderAfterScroll>

      <PageSection>
        <div className="textRow">
          <a className={projectStyles.goBack} onClick={goBack}>
            {'< Zurück'}
          </a>
          <div className={projectStyles.renderedContent}>{project.text}</div>
        </div>
        <CTAButton title="Jetzt Spenden" url={paypalUrl} blank={true} />
      </PageSection>
    </div>
  );
};

export default Project;
