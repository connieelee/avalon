import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapState = state => ({
  currentPlayer: state.currentPlayer,
});

const mapDispatch = null;

const WaitingRoom = ({ currentPlayer }) => (
  !currentPlayer ? <Redirect to="/join" /> :
  <div className="vertical-center flex-container-col text-center">
    <div>
      <h2>Welcome, {currentPlayer.name}!</h2>
      <p>Please wait for the host to begin the game.</p>
    </div>
  </div>
);

export default connect(mapState, mapDispatch)(WaitingRoom);
