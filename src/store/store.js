import { createStore, combineReducers } from 'redux';
//import boardReducer from '../reducers/board';
//import rowReducer from '../reducers/row';
import initialState from './initialState';

const MOVE_PIECE = 'MOVE_PIECE';

export const movePiece = (move) => {
    store.dispatch({
        type: MOVE_PIECE,
        move,
    });
};

export function moveReducer(state = initialState, action) {
    console.log('================MOVE REDUCER==================');
    switch (action.type) {
        case MOVE_PIECE:
            let result = {
                ...state,
                board: {
                    ...state.board,
                    ...action.move,
                },
            };
            console.log(result);
            return result;
        default:
            return state;
    }
}

const store = createStore(moveReducer);

//console.log(store.getState());

export default store;