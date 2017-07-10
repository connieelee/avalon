const {
  SERVER_SEND_ROOMS,
  SERVER_CREATED_ROOM,
  SERVER_PLAYER_JOINED,
  SERVER_JOIN_SUCCESSFUL,
} = require('../constants');

module.exports.serverSendRooms = rooms => ({
  type: SERVER_SEND_ROOMS, rooms,
});

module.exports.serverCreatedRoom = roomId => ({
  type: SERVER_CREATED_ROOM, roomId,
});

module.exports.serverPlayerJoined = newPlayer => ({
  type: SERVER_PLAYER_JOINED, newPlayer,
});

module.exports.serverJoinSuccessful = (roomId, allPlayers, newPlayer) => ({
  type: SERVER_JOIN_SUCCESSFUL, roomId, allPlayers, newPlayer,
});
