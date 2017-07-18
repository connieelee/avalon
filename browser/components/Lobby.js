import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapState = state => ({
  roomId: state.roomId,
  players: state.players,
});

const mapDispatch = null;

const Lobby = ({ roomId, players }) => (
  !roomId ? <Redirect to="/" /> :
  <div className="flex-container-col vertical-center">
    <div className="text-center">
      <h1>room id: <span className="room-code">{roomId}</span></h1>
      <p>Enter room code on mobile device to join</p>
      <hr className="dots" />
      <h2>players joined:</h2>
      {!players.length ? <p>No players have joined yet!</p> :
      <ul className="pure-g">
        {players.map(player => (
          <li key={player.id} className="pure-u-1-6 player-card">
            {player.name}
          </li>
        ))}
      </ul>}
      {players.length >= 5 && <button className="btn">start game</button>}
    </div>
  </div>
);

export default connect(mapState, mapDispatch)(Lobby);
