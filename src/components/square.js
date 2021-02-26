import React from 'react';
import { connect } from 'react-redux';
import Piece from './piece';
import { movePiece } from '../store/store';

class Square extends React.Component {
  constructor(props) {
    super();
    this.state = {
      id: '',
      piece_name: undefined,
      image: '',
    };
    this.moveObj = {};
    this.handleSelectPiece = this.handleSelectPiece.bind(this);
  }
  componentDidMount() {
    const id = this.props.id;
    const piece_name = this.props.board[id];
    const image = this.props.image_url[piece_name];
    this.setState({
      id: id,
      piece_name: piece_name,
      image: image,
    });
  }
  handleSelectPiece(from) {
    console.log(from);
    //movePiece({ 8: undefined, 32: 'w_P0' });
  }
  render() {
    const { className, id } = this.props;

    if (className) {
      return (
        <React.Fragment>
          <div
            className={className}
            id={`piece_${id}`}
            value={id}
            onMouseDown={() => {
              this.moveObj[id] = undefined;
              this.moveObj[16] = this.props.board[id];
              /* this.handleSelectPiece(this.moveObj); */
            }}
          >
            <Piece id={id} className={'piece'} />
          </div>
          <></>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <></>
        </React.Fragment>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    board: state.board,
    image_url: state.image_url,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    movePiece: () => dispatch(movePiece()),
  };
}

export default connect(mapStateToProps)(Square);
