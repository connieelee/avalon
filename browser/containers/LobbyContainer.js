import { connect } from 'react-redux';
import Lobby from '../components/Lobby';

const mapState = state => ({
  players: state.players,
  roomCode: state.gameId,
});

const mapDispatch = dispatch => ({

});

export default connect(mapState, mapDispatch)(Lobby);
