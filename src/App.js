import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
// import axios from 'axios'

import Project from './components/Project/Project'
import PageSection from './components/PageSection'

import Home from './views/Home'

const About = () => (
  <PageSection>
    <h2>About</h2>
  </PageSection>
)

const Topics = ({ match }) => (
  <PageSection>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Project}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </PageSection>
)

class App extends Component {

  state = {
    viewport: {
      latitude: 14.5527,
      longitude: 44.0000,
      zoom: 6.5,
      bearing: 0,
      pitch: 50,
      width: 500,
      height: 500
    },
    settings: {
      dragPan: false,
      dragRotate: false,
      scrollZoom: false,
      touchZoomRotate: false,
      doubleClickZoom: false,
    }
  }

  componentWillMount() {
    // axios.get('http://djv-hilfe.de/wp-json/wp-api-menus/v2/menus/6').then(res => console.log(res.data))
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize)
    this._resize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize)
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.props.width || window.innerWidth,
        height: 500 || window.innerHeight
      }
    })
  }

  _onViewportChange = viewport => this.setState({viewport})

  _onSettingChange = (name, value) => this.setState({
    settings: {...this.state.settings, [name]: value}
  })

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/ueber-uns" component={About}/>
          <Route path="/kontakt" component={Topics}/>
        </Switch>
      </div>
    )
  }
}

export default App
