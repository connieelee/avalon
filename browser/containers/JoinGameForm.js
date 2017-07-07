import React from 'react';
import { connect } from 'react-redux';
import { playerJoinGame } from '../redux/action-creators';

const mapState = state => ({
  socket: state.socket,
});

const mapDispatch = dispatch => ({
  playerJoinGame: (gameId, playerName) => {
    dispatch(playerJoinGame(gameId, playerName));
  },
});

class JoinGameForm extends React.Component {
  constructor() {
    super();
    this.state = {
      roomDoesNotExist: false,
      playerNameTaken: false,
    };
    this.onJoinSubmit = this.onJoinSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.socket) {
      this.setPlayerNameError = () => { this.setState({ playerNameTaken: true }); };
      this.props.socket.on('playerNameTaken', this.setPlayerNameError);

      this.setRoomError = () => { this.setState({ roomDoesNotExist: true }); };
      this.props.socket.on('roomDoesNotExist', this.setRoomError);

      this.clearErrors = () => {
        this.setState({ playerNameTaken: false, roomDoesNotExist: false });
      };
      this.props.socket.on('joinSuccessful', this.clearErrors);
    }
  }

  componentWillUnmount() {
    this.props.socket.removeListener('playerNameTaken', this.setPlayerNameError);
    this.props.socket.removeListener('roomDoesNotExist', this.setRoomError);
    this.props.socket.removeListener('joinSuccessful', this.clearErrors);
  }

  onJoinSubmit(evt) {
    evt.preventDefault();
    this.clearErrors();
    const gameId = evt.target.gameid.value;
    const playerName = evt.target['player-name'].value;
    this.props.playerJoinGame(gameId, playerName);
  }

  render() {
    return (
      <form onSubmit={this.onJoinSubmit}>
        <h5>Join Existing Game</h5>
        <div>
          <label htmlFor="gameid">room code:</label>
          <input name="gameid" type="text" />
          {
            this.state.roomDoesNotExist &&
            <p style={{ color: 'red' }}>room code not valid</p>
          }
        </div>
        <div>
          <label htmlFor="player-name">your name:</label>
          <input name="player-name" type="text" />
          {
            this.state.playerNameTaken &&
            <p style={{ color: 'red' }}>that name is taken</p>
          }
        </div>
        <button type="submit">join</button>
      </form>
    );
  }
}

export default connect(mapState, mapDispatch)(JoinGameForm);
