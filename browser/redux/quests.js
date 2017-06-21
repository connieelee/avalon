const SET_QUESTS = 'SET_QUESTS';
const ADD_PARTICIPANT = 'ADD_PARTICIPANT';
const REMOVE_PARTICIPANT = 'REMOVE_PARTICIPANT';
const SUBMIT_ACTION = 'SUBMIT_ACTION';


export const setQuests = quests => ({ type: SET_QUESTS, quests });
export const addParticipant = (questId, participant) => ({
  type: ADD_PARTICIPANT,
  questId,
  participant,
});
export const removeParticipant = (questId, participant) => ({
  type: REMOVE_PARTICIPANT,
  questId,
  participant,
});
export const submitAction = (questId, participant, action) => ({
  type: SUBMIT_ACTION,
  questId,
  participant,
  action,
});

const initialState = { 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };

const questsReducer = (prevState = initialState, action) => {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
    case SET_QUESTS:
      return action.quests;
    case ADD_PARTICIPANT:
      nextState[action.questId].participants = [
        ...prevState[action.questId].participants,
        action.participant,
      ];
      return nextState;
    case REMOVE_PARTICIPANT:
      nextState[action.questId].participants =
        nextState[action.questId].participants
          .filter(participant => participant !== action.participant);
      return nextState;
    default:
      return prevState;
  }
};

export default questsReducer;
