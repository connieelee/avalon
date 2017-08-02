import {
  SERVER_SEND_ROOMS,
  SERVER_NEW_ROOM_CREATED,
  SERVER_HOST_SUCCESSFUL,
  SERVER_PLAYER_JOINED,
  SERVER_JOIN_SUCCESSFUL,
  SERVER_ASSIGN_ROLE,
  SERVER_ROLES_ASSIGNED,
  SERVER_ERROR,
  CLEAR_SERVER_ERRORS,
} from '../../constants';

const initialState = {
  rooms: [],
  roomId: null,
  players: [],
  currentPlayer: null,
  errors: {
    joinErrors: [],
  },
  isHost: false,
  setupComplete: false,
};

function reducer(prevState = initialState, action) {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
    // cross-game events
    case SERVER_SEND_ROOMS: {
      nextState.rooms = action.rooms;
      return nextState;
    }
    case SERVER_NEW_ROOM_CREATED: {
      nextState.rooms = [...prevState.rooms, action.roomId];
      return nextState;
    }

    // host-related events
    case SERVER_HOST_SUCCESSFUL: {
      nextState.isHost = true;
      nextState.roomId = action.roomId;
      return nextState;
    }
    case SERVER_ROLES_ASSIGNED: {
      nextState.setupComplete = true;
      return nextState;
    }

    // player-related events
    case SERVER_PLAYER_JOINED: {
      nextState.players = [...prevState.players, action.newPlayer];
      return nextState;
    }
    case SERVER_JOIN_SUCCESSFUL: {
      nextState.roomId = action.roomId;
      nextState.players = action.allPlayers;
      nextState.currentPlayer = action.newPlayer;
      nextState.errors.joinErrors = [];
      return nextState;
    }
    case SERVER_ASSIGN_ROLE: {
      nextState.currentPlayer.role = action.role;
      return nextState;
    }

    // error handling
    case SERVER_ERROR: {
      const { type: errorType, message: errorMsg } = action.error;
      const existingErrors = nextState.errors[action.error.type];
      nextState.errors[errorType] = [...existingErrors, errorMsg];
      return nextState;
    }
    case CLEAR_SERVER_ERRORS: {
      nextState.errors[action.errorType] = [];
      return nextState;
    }

    default: {
      return prevState;
    }
  }
}

export default reducer;
