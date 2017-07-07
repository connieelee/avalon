import io from 'socket.io-client';

const socket = io(window.location.origin);

export const initSocket = () => {
  socket.on('connect', () => {
    console.log(`I'm connected! ${socket.id}`);
  });
};

export default socket;
