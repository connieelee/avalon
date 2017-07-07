import React from 'react';
import { initSocket } from '../socket';

class Main extends React.Component {
  componentDidMount() {
    initSocket();
  }

  render() {
    return (
      <h1>hi</h1>
    );
  }
}

export default Main;
