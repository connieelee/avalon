import React from 'react';
import { connect } from 'react-redux';

const mapState = state => ({
  roomId: state.roomId,
  players: state.players,
  isHost: state.isHost,
  currentPlayer: state.currentPlayer,
});

const Lobby = ({ roomId, players, isHost, currentPlayer }) => (
  <div>
    <h3>Welcome{ !isHost && `, ${currentPlayer.name}`}</h3>
    <p>Room ID: {roomId}</p>
    {
      isHost ?
        <div>
          <h3>players in room:</h3>
          <ul>
            { players.map(player => <li key={player.id}>{player.name}</li>) }
          </ul>
        </div> :
        <p>Please wait for host to begin the game</p>
    }
  </div>
);

export default connect(mapState, null)(Lobby);
