import React from 'react';
import Row from './row';
import { connect } from 'react-redux';
import { movePiece } from '../store/store';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.rows = new Array(8);
    this.initRows();
    this.sides = {
      1: [...Object.values(this.props.initBoard).slice(0, 16)],
      2: [...Object.values(this.props.initBoard).slice(16, 33)],
    };
    this.state = {
      turn: 1,
    };
  }
  componentDidMount() {
    //console.log('didMount!');
  }
  initRows() {
    for (let idx = 0; idx < this.rows.length; idx++) {
      this.rows[idx] = { className: 'row', id: idx };
    }
  }
  getFeasibleMoves(pieces) {
    const moves = this.props.moves;
    const board = this.props.board;
    const curr_pos = this.props.curr_pos;
    const feasible_moves = this.props.feasible_moves;

    pieces.forEach((piece) => {
      feasible_moves[piece] = [];
      moves[piece].forEach((move) => {
        let next_pos = move + curr_pos[piece];

        if (
          next_pos >= 0 &&
          next_pos <= 63 &&
          (board[next_pos] === undefined ||
            !this.sides[this.state.turn].includes(board[next_pos]))
        ) {
          feasible_moves[piece].push(next_pos);
        }
      });
      feasible_moves[piece] = [...new Set(feasible_moves[piece])];
    });
  }
  autoPlay() {
    setInterval(() => {
      try {
        if (this.state.turn === 1) {
          this.setState({ turn: 2 });
        } else if (this.state.turn === 2) {
          this.setState({ turn: 1 });
        }
        /*     this.sides[this.state.turn].forEach((piece) => {
      if (this.props.feasible_moves[piece].length === 0) {
        delete this.props.feasible_moves[piece];
      }
    }); */
        const side = this.sides[this.state.turn].filter(
          (piece) => this.props.feasible_moves[piece].length > 0
        );
        console.log(side);
        this.getFeasibleMoves(side);

        const randPiece = side[Math.floor(Math.random() * side.length)];
        const feasible_moves = this.props.feasible_moves[randPiece];
        console.log(feasible_moves);
        const randMove =
          feasible_moves[Math.floor(Math.random() * feasible_moves.length)];
        const curr_pos = this.props.curr_pos[randPiece];
        let moveObj = {};
        moveObj[curr_pos] = undefined;
        console.log('REMOVE: ', moveObj);
        movePiece(moveObj);
        moveObj = {};
        moveObj[randMove] = randPiece;
        console.log('INSERT: ', moveObj);
        movePiece(moveObj);
      } catch (e) {
        alert('Game completed....unceremoniously');
        return;
      }
    }, 1000);
  }
  render() {
    return (
      <React.Fragment>
        <div className="middlePage">
          <div className="leftNav">
            <div>Still a very buggy WIP...</div>
            <div>Stores board state in redux</div>
            <div>Computes and plays random moves at each turn</div>
          </div>
          <div className="board">
            {this.rows.map((row, idx) => (
              <Row key={idx} className={row.className} id={idx} />
            ))}
          </div>
          <div className="rightNav">
            <button
              type="submit"
              className="btn-submit"
              onClick={() => this.autoPlay()}
            >
              AutoPlay
            </button>
          </div>
        </div>
        <div className="bottomPage">
          <div className="bottomNav">
            <div>https://github.com/muvavarirwa/chessy.js</div>
          </div>
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
