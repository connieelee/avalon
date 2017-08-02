const _ = require('underscore');
const utils = require('../utils');
const {
  RoomDoesNotExistError,
  RoomFullError,
  NameTakenError,
} = require('./errors');

const {
  serverSendRooms,
  serverNewRoomCreated,
  serverHostSuccessful,
  serverPlayerJoined,
  serverJoinSuccessful,
  serverAssignRoleToPlayer,
  serverRoleAssignmentComplete,
  serverError,
} = require('./actionCreators');

const {
  HOST_NEW_GAME,
  HOST_START_GAME,
  PLAYER_JOIN_GAME,
} = require('../constants');

const rooms = {};
module.exports.init = (io, socket) => {
  // init
  socket.emit('action', serverSendRooms(Object.keys(rooms)));

  socket.on('action', (action) => {
    // host events
    if (action.type === HOST_NEW_GAME) {
      const roomId = utils.ID();
      rooms[roomId] = { host: socket, players: [] };
      socket.join(roomId);
      io.emit('action', serverNewRoomCreated(roomId));
      socket.emit('action', serverHostSuccessful(roomId));
      // TODO: HANDLE HOST DISCONNECTION
    }
    if (action.type === HOST_START_GAME) {
      const { roomId, specialCharacters } = action;
      const room = rooms[roomId];

      let numPlayers = room.players.length;
      let numEvil = (numPlayers < 7) ? 2 : (numPlayers < 10) ? 3 : 4;

      const roles = [];
      Object.keys(specialCharacters).forEach(character => {
        if (specialCharacters[character].selected) {
          roles.push(character);
          numPlayers -= 1;
          if (specialCharacters[character].evil) numEvil -= 1;
        }
      });

      while (numPlayers) {
        if (numEvil) {
          roles.push('minion');
          numEvil -= 1;
        } else {
          roles.push('servant');
        }
        numPlayers -= 1;
      }

      const shuffledRoles = _.shuffle(roles);
      room.players.forEach(player => {
        player.role = shuffledRoles.pop();
        socket.to(player.id).emit('action', serverAssignRoleToPlayer(player.role));
      });

      io.in(roomId).emit('action', serverRoleAssignmentComplete());
    }

    // player events
    if (action.type === PLAYER_JOIN_GAME) {
      const { roomId, name } = action;
      const room = rooms[roomId];
      if (!room) {
        socket.emit('action', serverError(new RoomDoesNotExistError(roomId)));
      } else if (room.players.length >= 10) {
        socket.emit('action', serverError(new RoomFullError(roomId)));
      } else {
        const nameTaken = room.players.find(player => player.name === name);
        if (nameTaken) {
          socket.emit('action', serverError(new NameTakenError(name, roomId)));
        } else {
          const newPlayer = { id: socket.id, name };
          room.players.push(newPlayer);
          socket.join(roomId);
          io.in(roomId).emit('action', serverPlayerJoined(newPlayer));
          socket.emit('action', serverJoinSuccessful(roomId, room.players, newPlayer));
          console.log(`${socket.id} joined game ${roomId}`);
        }
      }
      // TODO: HANDLE PLAYER DISCONNECTION
      // TODO?: handle already-joined error
    }
  });
};
