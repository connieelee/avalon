import { HOST_NEW_GAME, HOST_START_GAME } from '../../constants';

export const hostNewGame = () => ({ type: HOST_NEW_GAME });
export const hostStartGame = (roomId, specialCharacters) => ({
  type: HOST_START_GAME, roomId, specialCharacters,
});
