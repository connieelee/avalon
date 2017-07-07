/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route } from 'react-router';
import { Provider } from 'react-redux';

import store from './redux/store';
import { initGame } from './redux/action-creators';

import MainContainer from './containers/MainContainer';
import LobbyContainer from './containers/LobbyContainer';

function init() {
  store.dispatch(initGame());
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainContainer} onEnter={init} />
      <Route path="/lobby" component={LobbyContainer} />
    </Router>
  </Provider>
  ,
  document.getElementById('root'),
);
