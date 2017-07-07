import React from 'react';

const Lobby = ({ roomCode, players }) => (
  <div>
    <h2>lobby</h2>
    <p>room code: {roomCode}</p>
    <h3>current players</h3>
    {
      players.map(playerName => <p key={playerName}>{playerName}</p>)
    }
  </div>
);

export default Lobby;
