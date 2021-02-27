import { createStore } from 'redux';
import initialState from './initialState';

const MOVE_PIECE = 'MOVE_PIECE';

export const movePiece = (move) => {
    store.dispatch({
        type: MOVE_PIECE,
        move,
    });
};

export function moveReducer(state = initialState, action) {
    switch (action.type) {
        case MOVE_PIECE:
            return {
                ...state,
                board: {
                    ...state.board,
                    ...action.move,
                },
            };
        default:
            return state;
    }
}

const store = createStore(moveReducer);

export default store;