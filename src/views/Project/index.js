import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import PageSection from '../../components/PageSection';
import CTAButton from '../../components/CTAButton';
import FixedHeaderAfterScroll from '../../components/FixedHeaderAfterScroll';

import { Paypal } from '../../projects';

import projectStyles from './Project.scss';
import { serverUrl } from '../../server';

const Project = ({ history: { goBack }, match }) => {
  const [project, setProject] = useState({});
  const [paypalId, setPaypalId] = useState('');
  const paypalUrl = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=' + paypalId;

  useEffect(() => {
    axios.get(`${serverUrl}/projects/${match.params.id}`).then(({ data, data: { id, title, image, content } }) => {
      setProject({
        id,
        title,
        content,
        bgImage: image && image[0] && image[0].url,
      });
      let paypalId;

      Paypal.forEach((element) => {
        if (element.id === parseInt(match.params.id, 10)) {
          paypalId = element.paypalId;
        }
      });
      setPaypalId(paypalId);
    });
  }, []);

  return (
    <div>
      <PageHeader title={project.title} bgImage={project.bgImage} />

      <FixedHeaderAfterScroll>
        <Header />
      </FixedHeaderAfterScroll>

      <PageSection>
        <div className="textRow">
          <a className={projectStyles.goBack} onClick={goBack}>
            {'< Zurück'}
          </a>
          <div className={projectStyles.renderedContent}>{project.content}</div>
        </div>
        <CTAButton title="Jetzt Spenden" url={paypalUrl} blank={true} />
      </PageSection>
    </div>
  );
};

export default Project;
