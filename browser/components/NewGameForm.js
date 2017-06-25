import React from 'react';
import { Link } from 'react-router';

const NewGameForm = ({ players, setBoard }) => (
  <div>
    <h2>Start New Game</h2>
    <div>
      <h3>Players</h3>
      {
        players.map(player => <p key={player.socketId}>{player.name}</p>)
      }
    </div>
  </div>
);

export default NewGameForm;
