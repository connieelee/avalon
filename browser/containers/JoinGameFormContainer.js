import { connect } from 'react-redux';
import React from 'react';

import { setCurrentPlayerName } from '../redux/currentPlayer';
import { addPlayer } from '../redux/players';
import JoinGameForm from '../components/JoinGameForm';
import WaitingRoom from '../components/WaitingRoom';

const mapState = state => ({
  currentPlayer: state.currentPlayer,
});

const mapDispatch = dispatch => ({
  setCurrentPlayerName: name => dispatch(setCurrentPlayerName(name)),
  addPlayer: player => dispatch(addPlayer(player)),
});

class JoinGameFormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'join',
    };
    this.join = this.join.bind(this);
  }

  join(evt) {
    evt.preventDefault();
    const name = evt.target.name.value;
    const socket = this.props.currentPlayer.socket;
    const newPlayer = { socketId: socket.id, name };
    this.props.setCurrentPlayerName(name);
    this.props.addPlayer(newPlayer);
    socket.emit('playerJoined', newPlayer);
    this.setState({
      view: 'wait',
    });
  }

  render() {
    return (
      this.state.view === 'join' ?
        <JoinGameForm join={this.join} /> :
        <WaitingRoom playerName={this.props.currentPlayer.name} />
    );
  }
}

export default connect(mapState, mapDispatch)(JoinGameFormContainer);
