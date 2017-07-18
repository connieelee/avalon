import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { playerJoinGame, clearServerErrors } from '../actionCreators/player';

const mapState = state => ({
  errors: state.errors.joinErrors,
  rooms: state.rooms,
  currentPlayer: state.currentPlayer,
});

const mapDispatch = (dispatch) => ({
  playerJoinGame: (roomId, name) => dispatch(playerJoinGame(roomId, name)),
  clearServerErrors: (errorType) => dispatch(clearServerErrors(errorType)),
});

const initialFormState = () => ({
  room: { value: '', dirty: false, error: null },
  name: { value: '', dirty: false, error: null },
});

class PlayerJoin extends React.Component {
  constructor() {
    super();
    this.state = initialFormState();
    this.playerSubmit = this.playerSubmit.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  playerSubmit(evt) {
    evt.preventDefault();
    this.props.clearServerErrors('joinErrors');
    const roomId = this.state.room.value;
    const name = this.state.name.value;
    this.props.playerJoinGame(roomId, name);
    this.setState(initialFormState());
  }

  updateInputValue(evt) {
    const { name: field, value } = evt.target;
    this.setState((prevState) => {
      const nextState = Object.assign({}, prevState);
      nextState[field].value = value;
      if (prevState[field].dirty && !value) {
        nextState[field].error = `${field} input must not be empty!`;
      } else {
        nextState[field].error = '';
        nextState[field].dirty = true;
      }
      return nextState;
    });
  }

  componentWillUpdate() {
    const joinSubmitBtn = document.getElementById('join-submit');
    if (!this.state.room.value || !this.state.name.value) joinSubmitBtn.disabled = true;
    else joinSubmitBtn.disabled = false;
  }

  render() {
    // TODO: allow players to upload a profile photo for the game?
    return (
      this.props.currentPlayer ? <Redirect to="/wait" /> :
      <div className="vertical-center flex-container-col mobile text-center">
        <form onSubmit={this.playerSubmit}>
          <h1>join game</h1>
          {this.props.errors.map(message => (
            <p key={message} className="err-msg">{message}</p>
          ))}
          <div className="input-group">
            <i className="fa fa-lock" />
            <input
              name="room"
              type="text"
              maxLength="7"
              placeholder="Room ID..."
              value={this.state.room.value}
              onChange={this.updateInputValue}
            />
          </div>
          {this.state.room.error && <p className="warning-msg">{this.state.room.error}</p>}
          <div className="input-group">
            <i className="fa fa-user" />
            <input
              name="name"
              type="text"
              placeholder="Your name..."
              value={this.state.name.value}
              onChange={this.updateInputValue}
            />
          </div>
          {this.state.name.error && <p className="warning-msg">{this.state.name.error}</p>}
          <button id="join-submit" type="submit" className="btn" disabled>submit</button>
        </form>
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(PlayerJoin);
