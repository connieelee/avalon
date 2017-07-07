import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import defaultLogger from 'redux-logger';

import reducer from './reducer';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk, defaultLogger),
));

export default store;
