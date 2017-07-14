import { PLAYER_JOIN_GAME, CLEAR_SERVER_ERRORS } from '../../constants';

export const playerJoinGame = (roomId, name) => ({
  type: PLAYER_JOIN_GAME, roomId, name,
});

export const clearServerErrors = (errorType) => ({
  type: CLEAR_SERVER_ERRORS, errorType,
});
