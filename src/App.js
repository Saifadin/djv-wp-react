import React, { Component, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactPixel from 'react-facebook-pixel';

import Footer from './components/Footer';

import Home from './views/Home';
import Projects from './views/Projects';
import Ramadan from './views/Ramadan';
import Project from './views/Project';
import AboutUs from './views/AboutUs';
import Impressum from './views/Impressum';
import ThankYou from './views/ThankYou';
import Donate from './views/Donate';
import DontaionFormPage from './views/DonationForm';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      ReactPixel.pageView();
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

withRouter(ScrollToTop);

const App = () => {
  useEffect(() => {
    ReactPixel.init('351579262228846');
  }, []);

  return (
    <div className="App">
      <Helmet>
        <title>DJV e.V. | Ihre Spende kann vieles Bewirken</title>
        <meta property="robots" content="index,follow" />
        <meta property="keywords" content="Charity,Hilfsorganisation,Spenden,Jemen" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="DJV e.V." />
      </Helmet>
      <Switch>
        <ScrollToTop>
          <Route exact path="/" component={Home} />
          <Route path="/projekte" component={Projects} />
          <Route path="/ramadan" component={Ramadan} />
          <Route path="/spenden" component={Donate} />
          <Route path="/ueber-uns" component={AboutUs} />
          <Route path="/projekt/:id" component={Project} />
          <Route path="/impressum" component={Impressum} />
          <Route path="/danke" component={ThankYou} />
          <Route path="/spendenbescheinigung" component={DontaionFormPage} />
        </ScrollToTop>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
