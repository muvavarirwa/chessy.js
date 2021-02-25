import React from 'react';
import Row from './row';

function Board() {
  let rows = new Array(8);

  for (let idx = 0; idx < rows.length; idx++) {
    rows[idx] = { className: 'row', id: idx };
  }

  return (
    <React.Fragment>
      <div className="middlePage">
        <div className="leftNav"></div>
        <div className="board">
          {rows.map((row, idx) => (
            <Row key={idx} className={row.className} id={idx} />
          ))}
        </div>
        <div className="rightNav"></div>
      </div>
      <div className="bottomPage">
        <div className="bottomNav"></div>
      </div>
    </React.Fragment>
  );
}

export default Board;
