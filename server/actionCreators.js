const { SERVER_CREATED_ROOM } = require('../constants');

module.exports.serverCreatedRoom = roomId => ({
  type: SERVER_CREATED_ROOM, roomId,
});
