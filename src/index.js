/* eslint-disable no-console */
import React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom';
import App from './App'
import store from './config'
import {getCourses} from './actions'

store.dispatch(getCourses())

let app = document.getElementById('main')
render(
  <Provider store={store}>
      <App surname="soni"/>
  </Provider>, app)
