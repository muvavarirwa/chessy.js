import React from 'react';
import Row from './row';
import { connect } from 'react-redux';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.rows = new Array(8);
    this.initRows();
    this.sides = {
      1: [...Object.values(this.props.initBoard).slice(0, 16)],
      2: [...Object.values(this.props.initBoard).slice(17, 32)],
    };
  }
  initRows() {
    for (let idx = 0; idx < this.rows.length; idx++) {
      this.rows[idx] = { className: 'row', id: idx };
    }
  }
  getFeasibleMoves() {
    const { board, curr_pos, feasible_moves, moves } = this.props;
    const pieces = Object.keys(board);

    pieces.forEach((piece) => {
      feasible_moves[piece] = [];
      moves.forEach((move) => {
        let next_pos = move + curr_pos[piece];
        if (next_pos >= 0 && next_pos <= 63 && board[next_pos] === undefined) {
          feasible_moves[piece].push(next_pos);
        }
      });
      feasible_moves[piece] = [...new Set(feasible_moves[piece])];
    });
  }
  autoPlay() {
    console.log(this.sides);
  }
  render() {
    return (
      <React.Fragment>
        <div className="middlePage">
          <div className="leftNav"></div>
          <div className="board">
            {this.rows.map((row, idx) => (
              <Row key={idx} className={row.className} id={idx} />
            ))}
          </div>
          <div className="rightNav">
            <button
              type="submit"
              className="btn-submit"
              onClick={this.autoPlay()}
            >
              AutoPlay
            </button>
          </div>
        </div>
        <div className="bottomPage">
          <div className="bottomNav"></div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    board: state.board,
    initBoard: state.initBoard,
    feasible_moves: state.feasible_moves,
    moves: state.moves,
    curr_pos: state.curr_pos,
  };
}

export default connect(mapStateToProps)(Board);
