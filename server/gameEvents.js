const utils = require('../utils');
const {
  serverCreatedRoom,
  serverPlayerJoined,
  serverJoinSuccessful,
} = require('./actionCreators');

const {
  HOST_NEW_GAME,
  PLAYER_JOIN_GAME,
} = require('../constants');

module.exports.init = (io, socket) => {
  socket.on('action', (action) => {
    // host events
    if (action.type === HOST_NEW_GAME) {
      socket.name = 'host';
      const roomId = utils.ID();
      socket.join(roomId);
      socket.emit('action', serverCreatedRoom(roomId));
      console.log(`${socket.id} hosted new game ${roomId}`);
    }

    // player events
    if (action.type === PLAYER_JOIN_GAME) {
      const room = io.sockets.adapter.rooms[action.roomId];
      const connectedSockets = io.sockets.connected;
      if (room) {
        const nameExists = Object.keys(room.sockets)
          .find(id => connectedSockets[id].name === action.name);
        if (!nameExists) {
          socket.name = action.name;
          socket.join(action.roomId);
          const newPlayer = { id: socket.id, name: socket.name };
          const allPlayers = Object.keys(room.sockets).map(id => ({
            id, name: connectedSockets[id].name,
          }));
          io.in(action.roomId).emit('action', serverPlayerJoined(newPlayer));
          socket.emit('action', serverJoinSuccessful(allPlayers, newPlayer));
          console.log(`${socket.id} joined game ${action.roomId}`);
        }
      }
    }
  });
};
