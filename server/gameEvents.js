const utils = require('../utils');

module.exports.init = (socket) => {
  socket.on('action', (action) => {
    // host events
    if (action.type === 'host/hello') {
      console.log('got hello data!', action.data);
      socket.emit('action', { type: 'response', data: 'heya' });
    }

    // player events
  });
};
