import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import makeBoard from '../gameUtils/makeBoard';
import { setNumPlayers } from '../redux/numPlayers';
import { setNumMinions } from '../redux/numMinions';
import { setQuests } from '../redux/quests';
import NewGameForm from '../components/NewGameForm';

const mapState = state => ({
  players: state.players,
});

const mapDispatch = dispatch => ({
  setBoard: (evt) => {
    evt.preventDefault();

    const board = makeBoard(numPlayers);

    dispatch(setNumPlayers(board.numPlayers));
    dispatch(setNumMinions(board.numMinions));
    dispatch(setQuests(board.quests));
    browserHistory.push('/choose');
  },
});

export default connect(mapState, mapDispatch)(NewGameForm);
