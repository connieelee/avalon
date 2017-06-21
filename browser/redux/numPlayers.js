const SET_NUM_PLAYERS = 'SET_NUM_PLAYERS';

export const setNumPlayers = numPlayers => ({ type: SET_NUM_PLAYERS, numPlayers });

const numPlayersReducer = (prevState = 0, action) => {
  switch (action.type) {
    case SET_NUM_PLAYERS:
      return action.numPlayers;
    default:
      return prevState;
  }
};

export default numPlayersReducer;
