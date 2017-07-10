const {
  SERVER_CREATED_ROOM,
  SERVER_PLAYER_JOINED,
  SERVER_JOIN_SUCCESSFUL,
} = require('../constants');

module.exports.serverCreatedRoom = roomId => ({
  type: SERVER_CREATED_ROOM, roomId,
});

module.exports.serverPlayerJoined = newPlayer => ({
  type: SERVER_PLAYER_JOINED, newPlayer,
});

module.exports.serverJoinSuccessful = (allPlayers, newPlayer) => ({
  type: SERVER_JOIN_SUCCESSFUL, allPlayers, newPlayer,
});
