import React from 'react';
import { Link } from 'react-router';

const NewGameForm = ({ handleSubmit }) => (
  <div>
    <h2>Start New Game</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="numPlayers">Players: </label>
      <select name="numPlayers">
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <button type="submit">submit</button>
    </form>
  </div>
);

export default NewGameForm;
