/* global document */
import React from 'react';
/* global io */

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route } from 'react-router';

import store from './redux/store';
import { setCurrentPlayerSocket } from './redux/currentPlayer';
import { addPlayer } from './redux/players';

import NewGameFormContainer from './containers/NewGameFormContainer';
import JoinGameFormContainer from './containers/JoinGameFormContainer';
import ChooseRolesContainer from './containers/ChooseRolesContainer';
// import GamePlayContainer from './containers/GamePlayContainer';

const setUpSocket = () => {
  const socket = io();
  socket.on('connect', () => {
    console.log('i am connected!', socket.id);
    store.dispatch(setCurrentPlayerSocket(socket));
  });

  socket.on('addPlayer', (newPlayer) => {
    console.log('a user joined:', newPlayer.name);
    store.dispatch(addPlayer(newPlayer));
  });
};

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={NewGameFormContainer} onEnter={setUpSocket} />
      <Route path="/join" component={JoinGameFormContainer} onEnter={setUpSocket} />
      <Route path="/choose" component={ChooseRolesContainer} />
      {/* <Route path="/play" component={GamePlayContainer} /> */}
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root'),
);
