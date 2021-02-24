import React from 'react';

const CREATE_ROWS = 'CREATE_ROWS';

let pieces = new Array(8);

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

const initialState = { pieces };

const rowReducer = (state = initialState, action) => {
  return state;
};

export default rowReducer;
