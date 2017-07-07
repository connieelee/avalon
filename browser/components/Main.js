import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import StartScreen from './StartScreen';
import Lobby from './Lobby';

const Main = () => (
  <Router>
    <div>
      <Route exact path="/" component={StartScreen} />
      <Route path="/lobby" component={Lobby} />
    </div>
  </Router>
);

export default Main;
