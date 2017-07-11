import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { hostNewGame } from '../actionCreators/host';

const mapDispatch = dispatch => ({
  hostNewGame: () => dispatch(hostNewGame()),
});

const HostMain = ({ hostNewGame }) => (
  <div className="vertical-center-container">
    <div id="main" className="text-center">
      <h1>AVALON</h1>
      <p>rules rules rules explain game here etc. etc. blah blah.
         rules rules rules explain game here etc. etc. blah blah.
         rules rules rules explain game here etc. etc. blah blah.
         rules rules rules explain game here etc. etc. blah blah.</p>
      <Link to="/lobby" className="btn" onClick={hostNewGame}>New Game</Link>
    </div>
  </div>
);

export default connect(null, mapDispatch)(HostMain);
