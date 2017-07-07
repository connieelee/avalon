import { PLAYER_JOIN_GAME } from '../../constants';

export const playerJoinGame = (roomId, name) => ({
  type: PLAYER_JOIN_GAME, roomId, name,
});
