import React from 'react';
import { connect } from 'react-redux';

const mapState = state => ({
  roomId: state.roomId,
  players: state.players,
});

const Lobby = ({ roomId, players }) => (
  <div className="vertical-center-container">
    <div className="text-center">
      <h1>Room ID: <span className="room-code">{roomId}</span></h1>
      <p>Enter room code on mobile device to join</p>
      <hr className="dots" />
      <h2>Players Joined:</h2>
      <ul className="pure-g">
        {
          players.map(player => (
            <li key={player.id} className="pure-u-1-6 player-card">
              {player.name}
            </li>
          ))
        }
      </ul>
    </div>
  </div>
);

export default connect(mapState, null)(Lobby);
