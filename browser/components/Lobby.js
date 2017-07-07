import React from 'react';
import { connect } from 'react-redux';

const mapState = state => ({
  roomId: state.roomId,
  players: state.players,
});

const Lobby = ({ roomId, players }) => (
  <div>
    <h2>waiting for players...</h2>
    <p>room id: {roomId}</p>
    <h2>current players:</h2>
    <ul>
      { players.map(player => <li key={player.id}>{player.name}</li>) }
    </ul>
  </div>
);

export default connect(mapState, null)(Lobby);
