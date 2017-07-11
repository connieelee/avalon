import React from 'react';
import { connect } from 'react-redux';

import { playerJoinGame } from '../actionCreators/player';

const mapState = state => ({
  rooms: state.rooms,
});

const mapDispatch = (dispatch) => ({
  playerJoinGame: evt => {
    evt.preventDefault();
    const roomId = evt.target['room-id'].value;
    const name = evt.target['player-name'].value;
    dispatch(playerJoinGame(roomId, name));
    console.log('hey you joined woo');
  },
});

class PlayerJoin extends React.Component {
  constructor() {
    super();
    this.state = {
      roomError: null,
      nameError: null,
    };
  }

  render() {
    const { playerJoinGame } = this.props;
    return (
      <div className="vertical-center-container mobile text-center">
        <form onSubmit={playerJoinGame}>
          <h1>Join Game</h1>
          <input name="room-id" type="text" placeholder="Enter room ID here" />
          <input name="player-name" type="text" placeholder="Enter your name here" />
          <button type="submit" className="btn">submit</button>
        </form>
      </div>

    );
  }
}

export default connect(mapState, mapDispatch)(PlayerJoin);
