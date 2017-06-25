import { combineReducers } from 'redux';
import currentPlayerReducer from './currentPlayer';
import numPlayersReducer from './numPlayers';
import numMinionsReducer from './numMinions';
import rolesReducer from './roles';
import playersReducer from './players';
import votesReducer from './votes';
import questsReducer from './quests';

const rootReducer = combineReducers({
  currentPlayer: currentPlayerReducer,
  numPlayers: numPlayersReducer,
  numMinions: numMinionsReducer,
  roles: rolesReducer,
  players: playersReducer,
  votes: votesReducer,
  quests: questsReducer,
});

export default rootReducer;
