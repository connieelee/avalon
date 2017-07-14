/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './store';
import HostMain from './components/HostMain';
import Lobby from './components/Lobby';
import PlayerJoin from './components/PlayerJoin';
import WaitingRoom from './components/WaitingRoom';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={HostMain} />
        <Route path="/lobby" component={Lobby} />
        <Route path="/join" component={PlayerJoin} />
        <Route path="/wait" component={WaitingRoom} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
