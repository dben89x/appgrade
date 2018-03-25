// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducers/index.js';
import App from './components/App';

const store = createStore(appReducer)

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,

  document.getElementById('root')
)
