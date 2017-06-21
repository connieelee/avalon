const ADD_PLAYER = 'ADD_PLAYER';
const REMOVE_PLAYER = 'REMOVE_PLAYER';

export const addPlayer = player => ({ type: ADD_PLAYER, player });
export const removePlayer = name => ({ type: REMOVE_PLAYER, name });

const playersReducer = (prevState = [], action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return [...prevState, action.player];
    case REMOVE_PLAYER:
      return prevState.filter(player => player.name !== action.name);
    default:
      return prevState;
  }
};

export default playersReducer;
