import Board from './components/board';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    board: state.board,
    image_url: state.image_url,
    feasible_moves: state.feasible_moves,
  };
}

export default connect(mapStateToProps)(App);
