const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const path = require('path');

const app = express();

app.use(morgan('dev'));

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './browser/index.html'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'ahh, something\'s wrong');
});

const server = app.listen(1337, () => {
  console.log(chalk.cyan('listening on 1337'));
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('a client connected, id: ', socket.id);
  socket.on('disconnect', () => {
    console.log(`client ${socket.id} disconnected`);
  });

  socket.on('playerJoined', (newPlayer) => {
    socket.broadcast.emit('addPlayer', newPlayer);
  });
});
