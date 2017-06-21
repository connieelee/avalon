/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route } from 'react-router';

import store from './redux/store';
import NewGameFormContainer from './containers/NewGameFormContainer';
import ChooseRolesContainer from './containers/ChooseRolesContainer';
// import GamePlayContainer from './containers/GamePlayContainer';

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={NewGameFormContainer} />
      <Route path="/choose" component={ChooseRolesContainer} />
      {/* <Route path="/play" component={GamePlayContainer} /> */}
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root'),
);
