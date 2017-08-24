import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapState = state => {
  const currentQuest = state.quests[state.currentQuestNum];
  currentQuest.number = state.currentQuestNum;
  currentQuest.master = state.players[currentQuest.questMasterIdx].name;
  return {
    setupComplete: state.setupComplete,
    quests: state.quests,
    currentQuest,
  };
};
const mapDispatch = null;

const Board = ({ setupComplete, currentQuest, quests }) => {
  if (!setupComplete) return <Redirect to="/lobby" />;
  return (
    <div>
      <h1>current quest</h1>
      <div>
        <p>Quest #: {currentQuest.number}</p>
        <p>Quest Master: {currentQuest.master}</p>
        <p>Participants: {currentQuest.participants.join(', ')}</p>
      </div>
    </div>
  );
};

export default connect(mapState, mapDispatch)(Board);
