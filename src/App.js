import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
// import axios from 'axios'

import Footer from './components/Footer'

import Home from './views/Home'
import Projects from './views/Projects'
import Project from './views/Project'
import AboutUs from './views/AboutUs'
import Impressum from './views/Impressum'

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

withRouter(ScrollToTop)

class App extends Component {
  componentWillMount() {
    // axios.get('https://djv-hilfe.de/wp-json/wp-api-menus/v2/menus/6').then(res => console.log(res.data))
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <ScrollToTop>
            <Route exact path="/" component={Home}/>
            <Route path="/projekte" component={Projects}/>
            <Route path="/ueber-uns" component={AboutUs}/>
            <Route path="/projekt/:id" component={Project}/>
            <Route path="/impressum" component={Impressum}/>
          </ScrollToTop>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
