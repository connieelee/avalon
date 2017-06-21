import { combineReducers } from 'redux';
import numPlayersReducer from './numPlayers';
import numMinionsReducer from './numMinions';
import rolesReducer from './roles';
import playersReducer from './players';
import votesReducer from './votes';
import questsReducer from './quests';

const rootReducer = combineReducers({
  numPlayers: numPlayersReducer,
  numMinions: numMinionsReducer,
  roles: rolesReducer,
  players: playersReducer,
  votes: votesReducer,
  quests: questsReducer,
});

export default rootReducer;
