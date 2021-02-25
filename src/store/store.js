import { createStore, combineReducers } from 'redux';
//import boardReducer from '../reducers/board';
//import rowReducer from '../reducers/row';
import initialState from './initialState';

const MOVE_PIECE = 'MOVE_PIECE';

export const movePiece = (board) => {
    console.log('============movePIECE========================');
    return {
        type: MOVE_PIECE,
        board,
    };
};

export function moveReducer(state = initialState, action) {
    /*     console.log('================MOVE REDUCER==================');
      console.log(state);
      console.log('------------- STATE from within REDUCER--------'); */
    switch (action.type) {
        case MOVE_PIECE:
            return {
                ...state,
                action,
            };
        default:
            return state;
    }
}

const store = createStore(moveReducer);

//console.log(store.getState());

export default store;