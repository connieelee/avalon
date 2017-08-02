import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapState = state => ({
  currentPlayer: state.currentPlayer,
  setupComplete: state.setupComplete,
});

const mapDispatch = null;

const WaitingRoom = ({ currentPlayer, setupComplete }) => {
  if (!currentPlayer) return <Redirect to="/join" />;
  if (setupComplete) return <Redirect to="/play" />;
  return (
    <div className="vertical-center flex-container-col text-center mobile">
      <div className="content-card">
        <h2>Welcome, {currentPlayer.name}.</h2>
        <p>Please wait for the host to begin the game.</p>
      </div>
    </div>
  );
};

export default connect(mapState, mapDispatch)(WaitingRoom);
