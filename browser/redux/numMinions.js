const SET_NUM_MINIONS = 'SET_NUM_MINIONS';

export const setNumMinions = numMinions => ({ type: SET_NUM_MINIONS, numMinions });

const numMinionsReducer = (prevState = 0, action) => {
  switch (action.type) {
    case SET_NUM_MINIONS:
      return action.numMinions;
    default:
      return prevState;
  }
};

export default numMinionsReducer;
