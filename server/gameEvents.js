const utils = require('../utils');
const {
  serverSendRooms,
  serverCreatedRoom,
  serverPlayerJoined,
  serverJoinSuccessful,
} = require('./actionCreators');

const {
  HOST_NEW_GAME,
  PLAYER_JOIN_GAME,
} = require('../constants');

const rooms = {};
module.exports.init = (io, socket) => {
  socket.emit('action', serverSendRooms(Object.keys(rooms)));

  socket.on('action', (action) => {
    // host events
    if (action.type === HOST_NEW_GAME) {
      const roomId = utils.ID();
      rooms[roomId] = { host: socket, players: [] };
      socket.join(roomId);
      io.emit('action', serverCreatedRoom(roomId));
    }

    // player events
    if (action.type === PLAYER_JOIN_GAME) {
      const { roomId, name } = action;
      const room = rooms[roomId];
      if (room) {
        const nameTaken = room.players.find(player => player.name === name);
        if (!nameTaken) {
          const newPlayer = { id: socket.id, name };
          room.players.push(newPlayer);
          socket.join(roomId);
          io.in(roomId).emit('action', serverPlayerJoined(newPlayer));
          socket.emit('action', serverJoinSuccessful(roomId, room.players, newPlayer));
          console.log(`${socket.id} joined game ${roomId}`);
        }
      }
      // TODO: handle no-room and name-taken errors
    }
  });
};
