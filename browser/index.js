/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import requireMobile from './hocs/requireMobile';

import store from './store';
import HostMain from './components/HostMain';
import Lobby from './components/Lobby';
import Board from './components/Board';
import PlayerJoin from './components/PlayerJoin';
import WaitingRoom from './components/WaitingRoom';
import PlayerView from './components/PlayerView';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={HostMain} />
        <Route path="/lobby" component={Lobby} />
        <Route path="/board" component={Board} />
        <Route path="/join" component={requireMobile(PlayerJoin)} />
        <Route path="/wait" component={requireMobile(WaitingRoom)} />
        <Route path="/play" component={requireMobile(PlayerView)} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
