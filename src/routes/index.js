import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './home.js';
import App from './app.js';

const Routes = (
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
    </Route>
);

export default Routes;
