import React from 'react';
import { connect } from 'react-redux';

function Piece(props) {
  const { board, pieces, className, id } = props;

  console.log('------------PIECE.js----------------');
  //console.log(props);
  //console.log(id);
  console.log('+++++++++++++++++++++++++++++++++++++');
  const piece_name = board[id];
  //console.log(pieces[piece_name].image_url);
  let image = '';
  if (pieces[piece_name] !== undefined) {
    image = pieces[piece_name].image_url;
  }
  console.log(image);

  if (image !== '') {
    return <span className={className}>{image}</span>;
  } else {
    return <span className={className}></span>;
  }
}

function mapStateToProps(state) {
  return {
    board: state.board,
    pieces: state.pieces,
  };
}

export default connect(mapStateToProps)(Piece);
