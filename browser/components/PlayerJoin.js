import React from 'react';
import { connect } from 'react-redux';

import { playerJoinGame } from '../actionCreators/player';

const mapState = state => ({
  error: state.errors.joinError,
  rooms: state.rooms,
});

const mapDispatch = (dispatch) => ({
  playerJoinGame: (roomId, name) => dispatch(playerJoinGame(roomId, name)),
});

class PlayerJoin extends React.Component {
  constructor() {
    super();
    this.state = {
      joined: false,
    };
    this.playerSubmit = this.playerSubmit.bind(this);
  }

  playerSubmit (evt) {
    evt.preventDefault();
    const roomId = evt.target['room-id'].value;
    const name = evt.target['player-name'].value;
    this.props.playerJoinGame(roomId, name);
  }

  render() {
    // TODO: allow players to upload a photo for the game?
    return (
      <div className="vertical-center-container mobile text-center">
        <form onSubmit={this.playerSubmit}>
          <h1>Join Game</h1>
          { this.props.error && <p className="err-msg">{this.props.error.message}</p> }
          <input name="room-id" type="text" placeholder="Enter room ID here" />
          <input name="player-name" type="text" placeholder="Enter your name here" />
          <button type="submit" className="btn">submit</button>
        </form>
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(PlayerJoin);
