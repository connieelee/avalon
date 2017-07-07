const utils = require('./utils');

module.exports.init = (io, socket) => {
  // Host events
  socket.on('hostNewGame', function () {
    const gameId = utils.ID();
    this.emit('newGameCreated', { gameId, hostId: this.id });
    this.join(gameId);
    io.sockets.adapter.rooms[gameId].players = [];
  });

  // Player events
  socket.on('playerJoinGame', function (gameId, playerName) {
    if (Object.keys(io.sockets.adapter.rooms).indexOf(gameId) === -1) {
      socket.emit('roomDoesNotExist');
      return;
    }

    const playersInRoom = io.sockets.adapter.rooms[gameId].players;
    if (playersInRoom.indexOf(playerName) > -1) {
      socket.emit('playerNameTaken');
      return;
    }

    playersInRoom.push(playerName);
    this.join(gameId);
    socket.broadcast.to(gameId).emit('playerJoined', { playerName });
    socket.emit('joinSuccessful', { gameId, playerName });
  });
};
