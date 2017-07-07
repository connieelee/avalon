import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { hostNewGame, playerJoinGame } from '../redux/action-creators';
import Main from '../components/Main';

const mapState = state => ({
  error: state.error,
});

const mapDispatch = dispatch => ({
  onStartClick: () => {
    dispatch(hostNewGame());
    browserHistory.push('/lobby');
  },
});

export default connect(mapState, mapDispatch)(Main);
