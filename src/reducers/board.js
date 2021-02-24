import React from 'react';

let rows = new Array(8);
for (let idx = 0; idx < rows.length; idx++) {
    rows[idx] = { className: 'row', id: idx };
}

export const initialState = {
    rows: rows,
};

const boardReducer = (state = initialState, action) => {
    return state;
};

export default boardReducer;