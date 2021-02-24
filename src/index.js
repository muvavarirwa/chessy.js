import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import initialState from './store/initialState';

function moveReducer(state = initialState, action) {
  return state;
}

const store = createStore(moveReducer);

console.log('--------------------------------------');
console.log(store);
console.log('++++++++++++++++++++++++++++++++++++++');
console.log(store.getState());
console.log('======================================');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
