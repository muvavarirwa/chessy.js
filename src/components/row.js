import React from 'react';
import Square from './square';

function Row(props) {
  let pieces = new Array(8);
  const { id, className } = props;

  for (let idx = 0; idx < pieces.length; idx++) {
    let cName;
    if (id % 2 === 0) {
      cName = idx % 2 === 0 ? 'square-black' : 'square-white';
    } else {
      cName = idx % 2 === 0 ? 'square-white' : 'square-black';
    }
    let piece_id = 8 * id + idx;
    pieces[idx] = { className: cName, id: piece_id };
  }

  return (
    <React.Fragment>
      <div className={className} id={`row_${id}`}>
        {pieces.map((piece) => (
          <Square key={piece.id} className={piece.className} id={piece.id} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Row;
