import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import socket from '../socket';

import { hostNewGame } from '../actionCreators/host';
import { playerJoinGame } from '../actionCreators/player';

const mapDispatch = dispatch => ({
  hostNewGame: () => {
    dispatch(hostNewGame());
  },
  playerJoinGame: (evt) => {
    evt.preventDefault();
    const roomId = evt.target['room-id'].value;
    const name = evt.target['player-name'].value;
    dispatch(playerJoinGame(roomId, name));
  },
});

const StartScreen = ({ hostNewGame, playerJoinGame }) => (
  <div>
    <h2>host new game</h2>
    <Link to="/lobby"><button onClick={hostNewGame}>go!</button></Link>
    <form onSubmit={playerJoinGame}>
      <h2>join existing game</h2>
      <div>
        <span>ROOM ID:</span>
        <input name="room-id" type="text" />
      </div>
      <div>
        <span>PLAYER NAME:</span>
        <input name="player-name" type="text" />
      </div>
      <button type="submit">join</button>
    </form>
  </div>
);

export default connect(null, mapDispatch)(StartScreen);
