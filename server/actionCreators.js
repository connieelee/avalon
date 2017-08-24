const {
  SERVER_SEND_ROOMS,
  SERVER_HOST_SUCCESSFUL,
  SERVER_NEW_ROOM_CREATED,
  SERVER_PLAYER_JOINED,
  SERVER_JOIN_SUCCESSFUL,
  SERVER_ASSIGN_ROLE,
  SERVER_BOARD_SETUP,
  SERVER_DESIGNATE_QUEST_MASTER,
  SERVER_ERROR,
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

module.exports.serverAssignRoleToPlayer = (role) => ({
  type: SERVER_ASSIGN_ROLE, role,
});

module.exports.serverBoardSetup = (quests) => ({
  type: SERVER_BOARD_SETUP, quests,
});

module.exports.serverDesignateQuestMaster = () => ({
  type: SERVER_DESIGNATE_QUEST_MASTER,
});

module.exports.serverError = (error) => ({
  type: SERVER_ERROR, error,
});
