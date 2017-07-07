import { SERVER_CREATED_ROOM } from '../../constants';

const initialState = {
  roomId: null,
  players: [],
  // TODO: determine how to save current player info
  role: '',
};

function reducer(prevState = initialState, action) {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
    case SERVER_CREATED_ROOM:
      nextState.roomId = action.roomId;
      return nextState;
    default:
      return prevState;
  }
}

export default reducer;
