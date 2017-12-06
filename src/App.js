import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
// import axios from 'axios'

import Footer from './components/Footer'

import Home from './views/Home'
import Projects from './views/Projects'
import Project from './views/Project'
import AboutUs from './views/AboutUs'

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
    // axios.get('https://djv-hilfe.de/wp-json/wp-api-menus/v2/menus/6').then(res => console.log(res.data))
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
          <ScrollToTop>
            <Route exact path="/" component={Home}/>
            <Route path="/projekte" component={Projects}/>
            <Route path="/ueber-uns" component={AboutUs}/>
            <Route path="/projekt/:id" component={Project}/>
          </ScrollToTop>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
