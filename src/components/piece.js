import React from 'react';
import { connect } from 'react-redux';

function Piece(props) {
  const { board, image_url, className, id } = props;

  const piece_name = board[id];

  let image = '';
  try {
    image = image_url[piece_name];
  } finally {
    //console.log('error');
  }

  if (image !== '') {
    return (
      <div className={className} value={id}>
        {image}
      </div>
    );
  } else {
    return <span className={className}></span>;
  }
}

function mapStateToProps(state) {
  return {
    board: state.board,
    image_url: state.image_url,
  };
}

export default connect(mapStateToProps)(Piece);
