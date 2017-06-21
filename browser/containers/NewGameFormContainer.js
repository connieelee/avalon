import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import makeBoard from '../gameUtils/makeBoard';
import { setNumPlayers } from '../redux/numPlayers';
import { setNumMinions } from '../redux/numMinions';
import { setQuests } from '../redux/quests';
import NewGameForm from '../components/NewGameForm';

const mapDispatch = dispatch => ({
  handleSubmit: (evt) => {
    evt.preventDefault();

    const numPlayers = +evt.target.numPlayers.value;
    const board = makeBoard(numPlayers);

    dispatch(setNumPlayers(board.numPlayers));
    dispatch(setNumMinions(board.numMinions));
    dispatch(setQuests(board.quests));
    browserHistory.push('/choose');
  },
});

export default connect(null, mapDispatch)(NewGameForm);
