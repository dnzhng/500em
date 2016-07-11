import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import './assets/scss/main.scss';

import Routes from './routes/'

ReactDOM.render((
  <Router history={browserHistory}>
    { Routes }
  </Router>
), document.getElementById('root'));
