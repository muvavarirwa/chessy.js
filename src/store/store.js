import { createStore, combineReducers } from 'redux';
import boardReducer from '../reducers/board';
import rowReducer from '../reducers/row';

const store = createStore(
    combineReducers({
        board: boardReducer,
        rows: rowReducer,
    })
);

console.log(store.getState());

export default store;