import React from 'react';
import { connect } from 'react-redux';

const mapState = state => ({
  roomId: state.roomId,
  players: state.players,
});

const Lobby = ({ roomId, players }) => (
  <div className="vertical-center-container">
    <div className="text-center">
      <h1>Room ID: {roomId}</h1>
      <p>Enter room code on mobile device to join</p>
      <hr className="dots" />
      <h2>Players Joined:</h2>
      <ul>
        { players.map(player => <li key={player.id}>{player.name}</li>) }
      </ul>
    </div>
  </div>
);

export default connect(mapState, null)(Lobby);
