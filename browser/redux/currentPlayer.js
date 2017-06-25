const SET_CURRENT_PLAYER_SOCKET = 'SET_CURRENT_PLAYER_SOCKET';
const SET_CURRENT_PLAYER_NAME = 'SET_CURRENT_PLAYER_NAME';

export const setCurrentPlayerSocket = socket => ({ type: SET_CURRENT_PLAYER_SOCKET, socket });
export const setCurrentPlayerName = name => ({ type: SET_CURRENT_PLAYER_NAME, name });

const currentPlayerReducer = (prevState = { socket: {}, name: '' }, action) => {
  const nextState = Object.assign({}, prevState);
  switch (action.type) {
    case SET_CURRENT_PLAYER_SOCKET:
      nextState.socket = action.socket;
      return nextState;
    case SET_CURRENT_PLAYER_NAME:
      nextState.name = action.name;
      return nextState;
    default:
      return prevState;
  }
};

export default currentPlayerReducer;
