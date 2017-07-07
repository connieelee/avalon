import React from 'react';
import JoinGameForm from '../containers/JoinGameForm';

const Main = ({ onStartClick }) => (
  <div>
    <div>
      <h5>Host New Game</h5>
      <button onClick={onStartClick}>start</button>
    </div>
    <JoinGameForm />
  </div>
);

export default Main;
