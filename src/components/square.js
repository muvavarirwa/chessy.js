import React from 'react';
import { connect } from 'react-redux';
import Piece from './piece';

function Square(props) {
  const { className, id } = props;
  /*   console.log('------------SQUARE.js----------------');
  console.log(props);
  console.log('++++++++++++++++++++++++++++++++++++++'); */
  return (
    <React.Fragment>
      <div className={className} id={`piece_${id}`}>
        <Piece id={id} className={'piece'} />
      </div>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    board: state.board,
    pieces: state.pieces,
  };
}

export default connect(mapStateToProps)(Square);
