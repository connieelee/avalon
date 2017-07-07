import { SET_GAME_ID, SET_ROLE, SET_NAME, ADD_PLAYER, SET_ERROR } from './constants';

// SYNC ACTIONS
const setGameId = gameId => ({ type: SET_GAME_ID, gameId });
const setRole = role => ({ type: SET_ROLE, role });
const setName = name => ({ type: SET_NAME, name });
const addPlayer = playerName => ({ type: ADD_PLAYER, playerName });
const setError = error => ({ type: SET_ERROR, error });

// THUNKS
export const initGame = () => (dispatch, getState) => {
  const { socket } = getState();
  socket.on('newGameCreated', ({ gameId, hostId }) => {
    dispatch(setGameId(gameId));
  });

  socket.on('playerJoined', ({ playerName }) => {
    dispatch(addPlayer(playerName));
  });

  socket.on('joinSuccessful', ({ gameId, playerName }) => {
    dispatch(setGameId(gameId));
    dispatch(setName(playerName));
  });
};

export const hostNewGame = () => (dispatch, getState) => {
  getState().socket.emit('hostNewGame');
  dispatch(setRole('host'));
};

export const playerJoinGame = (gameId, playerName) => (dispatch, getState) => {
  getState().socket.emit('playerJoinGame', gameId, playerName);
};
