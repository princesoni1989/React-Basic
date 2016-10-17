import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'
import Home from './Home'
import Contact from './Contact'
import AboutUs from './AboutUs'


export default (
  <Route path="/" component={App}>
   <IndexRoute component={Home}/>
    <Route path="contact" component={Contact}/>
    <Route path="aboutus" component={AboutUs}/>
  </Route>
)
