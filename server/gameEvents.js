const utils = require('../utils');
const { serverCreatedRoom } = require('./actionCreators');
const { HOST_NEW_GAME, PLAYER_JOIN_GAME } = require('../constants');

module.exports.init = (socket) => {
  socket.on('action', (action) => {
    // host events
    if (action.type === HOST_NEW_GAME) {
      const roomId = utils.ID();
      socket.join(roomId);
      socket.emit('action', serverCreatedRoom(roomId));
      console.log(`${socket.id} hosted new game ${roomId}`);
    }

    // player events
    if (action.type === PLAYER_JOIN_GAME) {
      // TODO:
      // check room exists
      // check name is unique
      // join room
      // emit successful join
    }
  });
};
