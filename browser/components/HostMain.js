import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { hostNewGame } from '../actionCreators/host';

const mapState = state => ({
  roomId: state.roomId,
});

const mapDispatch = dispatch => ({
  hostNewGame: () => dispatch(hostNewGame()),
});

const HostMain = ({ roomId, hostNewGame }) => (
  roomId ? <Redirect to="/lobby" /> :
  <div className="flex-container-col vertical-center">
    <div id="main" className="text-center flex-container-col">
      <h1 id="title">AVALON</h1>
      <p>
        To start a new game, click on the button below and wait for players to
        join the room.
      </p>
      <p>
        To join a game, navigate to ____URL____ on your mobile device and
        enter the appropriate room code.
      </p>
      <Link to="/lobby" className="btn" onClick={hostNewGame}>New Game</Link>
    </div>
  </div>
);

export default connect(mapState, mapDispatch)(HostMain);
