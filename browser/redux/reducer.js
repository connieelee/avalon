/* global io */
import { SET_GAME_ID, SET_ROLE, SET_NAME, ADD_PLAYER, SET_ERROR } from './constants';

const initialState = {
  socket: io.connect(),
  gameId: null,
  role: '',
  players: [],
  myName: '',
  error: null,
};

function reducer(prevState = initialState, action) {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
    case SET_GAME_ID:
      nextState.gameId = action.gameId;
      break;
    case SET_ROLE:
      nextState.role = action.role;
      break;
    case SET_NAME:
      nextState.myName = action.name;
      break;
    case ADD_PLAYER:
      nextState.players = [...prevState.players, action.playerName];
      break;
    case SET_ERROR:
      nextState.error = action.error;
      break;
    default:
      return prevState;
  }

  return nextState;
}

export default reducer;
