/* global document navigator */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
} from 'react-router-dom';

import { isOnMobileDevice } from '../utils';
// import requireMobile from './hocs/requireMobile';

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
        <Route exact path="/"
          render={() => {
            if (!isOnMobileDevice(navigator)) return <HostMain />;
            return <Redirect to="/join" />;
          }}
        />
        <Route path="/lobby" component={Lobby} />
        <Route path="/board" component={Board} />
        <Route path="/join" component={PlayerJoin} />
        <Route path="/wait" component={WaitingRoom} />
        <Route path="/play" component={PlayerView} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
