import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectQuestParticipants } from '../actionCreators/player';

const mapState = state => {
  const currentQuest = state.quests[state.currentQuestNum];
  return {
    players: state.players,
    currentPlayer: state.currentPlayer,
    setupComplete: state.setupComplete,
    currentQuest,
  };
};

const mapDispatch = dispatch => ({
  selectQuestParticipants: (participants, questNum) => {
    dispatch(selectQuestParticipants(participants, questNum));
  },
});

class PlayerView extends React.Component {
  render() {
    const {
      players,
      currentPlayer,
      setupComplete,
      currentQuest,
      selectParticipants,
    } = this.props;

    if (!currentPlayer) return <Redirect to="/join" />;
    if (!setupComplete) return <Redirect to="/wait" />;
    return (
      <div className="flex-container text-center">
        <h1>{currentPlayer.name}</h1>
        <p>Your role: {currentPlayer.role}</p>
        {
          currentPlayer.isQuestMaster &&
          <p>You are currently the quest master,
          choose {currentQuest.numParticipantsRequired} players</p>
        }
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(PlayerView);
