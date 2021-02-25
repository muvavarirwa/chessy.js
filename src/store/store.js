import { createStore, combineReducers } from 'redux';
import boardReducer from '../reducers/board';
import rowReducer from '../reducers/row';

const store = createStore(
    combineReducers({
        board: boardReducer,
        rows: rowReducer,
    })
);

export default store;