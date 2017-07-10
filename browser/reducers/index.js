import {
  SERVER_CREATED_ROOM,
  SERVER_PLAYER_JOINED,
  SERVER_JOIN_SUCCESSFUL,
} from '../../constants';

const initialState = {
  roomId: null,
  players: [],
  currentPlayer: {},
};

function reducer(prevState = initialState, action) {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
    // host-related
    case SERVER_CREATED_ROOM:
      nextState.roomId = action.roomId;
      return nextState;

    // player-related
    case SERVER_PLAYER_JOINED:
      nextState.players = [...prevState.players, action.newPlayer];
      return nextState;
    case SERVER_JOIN_SUCCESSFUL:
      nextState.players = action.allPlayers;
      nextState.currentPlayer = action.newPlayer;
      return nextState;

    default:
      return prevState;
  }
}

export default reducer;
