import {
  PLAYER_JOIN_GAME,
  CLEAR_SERVER_ERRORS,
  SELECT_QUEST_PARTICIPANTS,
} from '../../constants';

export const playerJoinGame = (roomId, name) => ({
  type: PLAYER_JOIN_GAME, roomId, name,
});

export const selectQuestParticipants = (participants, questNum) => ({
  type: SELECT_QUEST_PARTICIPANTS, questNum,
});

export const clearServerErrors = (errorType) => ({
  type: CLEAR_SERVER_ERRORS, errorType,
});