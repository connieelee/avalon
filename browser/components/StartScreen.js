import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { hostNewGame } from '../actionCreators/host';
import { playerJoinGame } from '../actionCreators/player';

const mapState = state => ({
  rooms: state.rooms,
});

const mapDispatch = (dispatch, ownProps) => ({
  hostNewGame: () => {
    dispatch(hostNewGame());
  },
  playerJoinGame: evt => {
    evt.preventDefault();
    const roomId = evt.target['room-id'].value;
    const name = evt.target['player-name'].value;
    dispatch(playerJoinGame(roomId, name));
    ownProps.history.push('/lobby');
  },
});

const StartScreen = ({ rooms, hostNewGame, playerJoinGame }) => (
  <div>
    <h2>host new game</h2>
    <Link to="/lobby"><button onClick={hostNewGame}>go!</button></Link>
    <form onSubmit={playerJoinGame}>
      <h2>join existing game</h2>
      <div>
        <span>ROOM ID:</span>
        <select name="room-id" defaultValue="select...">
          <option disabled>select...</option>
          { rooms.map(roomId => <option key={roomId} value={roomId}>{roomId}</option>) }
        </select>
      </div>
      <div>
        <span>PLAYER NAME:</span>
        <input name="player-name" type="text" />
      </div>
      <button type="submit">join</button>
    </form>
  </div>
);

export default connect(mapState, mapDispatch)(StartScreen);
