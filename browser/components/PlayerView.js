import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapState = state => ({
  currentPlayer: state.currentPlayer,
  setupComplete: state.setupComplete,
});

const mapDispatch = dispatch => ({

});

class PlayerView extends React.Component {
  render() {
    const { currentPlayer, setupComplete } = this.props;
    if (!currentPlayer) return <Redirect to="/join" />;
    if (!setupComplete) return <Redirect to="/wait" />;
    return (
      <div className="flex-container text-center">
        <h1>{currentPlayer.name}</h1>
        <p>Your role: {currentPlayer.role}</p>
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(PlayerView);
