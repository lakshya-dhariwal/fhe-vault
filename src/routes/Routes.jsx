import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import Gallery from '@/pages/Gallery';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/gallery' component={Gallery} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}
