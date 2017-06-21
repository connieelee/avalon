const CAST_VOTE = 'CAST_VOTE';

export const castVote = (questId, player, vote) => ({
  type: CAST_VOTE,
  questId,
  player,
  vote,
});

const initialState = {
  quest1: {},
  quest2: {},
  quest3: {},
  quest4: {},
  quest5: {},
};

const votesReducer = (prevState = initialState, action) => {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
    case CAST_VOTE:
      nextState[`quest${action.questId}`][action.player] = action.vote;
      return nextState;
    default:
      return prevState;
  }
};

export default votesReducer;
