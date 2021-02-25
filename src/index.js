import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import initialState from './store/initialState';
import Routes from './components/routes';

function moveReducer(state = initialState, action) {
  return state;
}

const store = createStore(moveReducer);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
