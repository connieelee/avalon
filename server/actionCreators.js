const {
  SERVER_SEND_ROOMS,
  SERVER_HOST_SUCCESSFUL,
  SERVER_NEW_ROOM_CREATED,
  SERVER_PLAYER_JOINED,
  SERVER_JOIN_SUCCESSFUL,
} = require('../constants');

module.exports.serverSendRooms = rooms => ({
  type: SERVER_SEND_ROOMS, rooms,
});

module.exports.serverHostSuccessful = roomId => ({
  type: SERVER_HOST_SUCCESSFUL, roomId,
});

module.exports.serverNewRoomCreated = roomId => ({
  type: SERVER_NEW_ROOM_CREATED, roomId,
});

module.exports.serverPlayerJoined = newPlayer => ({
  type: SERVER_PLAYER_JOINED, newPlayer,
});

module.exports.serverJoinSuccessful = (roomId, allPlayers, newPlayer) => ({
  type: SERVER_JOIN_SUCCESSFUL, roomId, allPlayers, newPlayer,
});
