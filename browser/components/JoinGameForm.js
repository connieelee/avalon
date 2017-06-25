import React from 'react';

const JoinGameForm = ({ join }) => (
  <div>
    <h2>Join Game</h2>
    <form onSubmit={join}>
      <label htmlFor="name">Name: </label>
      <input name="name" type="text" />
      <button type="submit">submit</button>
    </form>
  </div>
);

export default JoinGameForm;
