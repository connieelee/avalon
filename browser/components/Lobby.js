import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { hostStartGame } from '../actionCreators/host';

const mapState = state => ({
  roomId: state.roomId,
  players: state.players,
  setupComplete: state.setupComplete,
});

const mapDispatch = dispatch => ({
  startGame: (roomId, specialCharacters) => dispatch(hostStartGame(roomId, specialCharacters)),
});

class Lobby extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
    };
    this.submitGameStart = this.submitGameStart.bind(this);
  }

  submitGameStart(evt) {
    evt.preventDefault();
    const { players, startGame, roomId } = this.props;
    const specialCharacters = {
      merlin: { selected: evt.target.merlin.checked, evil: false },
      percival: { selected: evt.target.percival.checked, evil: false },
      mordred: { selected: evt.target.mordred.checked, evil: true },
      assassin: { selected: evt.target.assassin.checked, evil: true },
      morgana: { selected: evt.target.morgana.checked, evil: true },
      oberon: { selected: evt.target.oberon.checked, evil: true },
    };

    const numEvilSelected = Object.values(specialCharacters).reduce((acc, cur) => {
      if (cur.selected && cur.evil) return acc + 1;
      return acc;
    }, 0);
    if (players.length < 7 && numEvilSelected > 2) {
      this.setState({ error: `Only 2 evil allowed with ${players.length} players.` });
    } else if (players.length < 10 && numEvilSelected > 3) {
      this.setState({ error: `Only 3 evil allowed with ${players.length} players.` });
    } else {
      startGame(roomId, specialCharacters);
    }
  }

  render() {
    const { roomId, players, setupComplete } = this.props;
    if (!roomId) return <Redirect to="/" />;
    if (setupComplete) return <Redirect to="/board" />;
    return (
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
          <hr className="dots" />
          <h2>select special characters</h2>
          <form onSubmit={this.submitGameStart}>
            <div>
              <input type="checkbox" name="merlin" />
              <label htmlFor="merlin">Merlin</label>
            </div>
            <div>
              <input type="checkbox" name="percival" />
              <label htmlFor="percival">Perceival</label>
            </div>
            <div>
              <input type="checkbox" name="mordred" />
              <label htmlFor="mordred">Mordred</label>
            </div>
            <div>
              <input type="checkbox" name="assassin" />
              <label htmlFor="assassin">Assassin</label>
            </div>
            <div>
              <input type="checkbox" name="morgana" />
              <label htmlFor="morgana">Morgana</label>
            </div>
            <div>
              <input type="checkbox" name="oberon" />
              <label htmlFor="oberon">Oberon</label>
            </div>
            { players.length >= 5 &&
              <div>
                {this.state.error && <p className="err-msg">{this.state.error}</p>}
                <button type="submit" className="btn">start game</button>
              </div>
            }
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(Lobby);
