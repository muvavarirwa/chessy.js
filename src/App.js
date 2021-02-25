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

/* function mapStateToProps(state) {
  return {
    board: state.board,
    pieces: state.pieces,
  };
} */

export default connect()(App);
