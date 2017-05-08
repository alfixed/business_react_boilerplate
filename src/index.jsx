import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import App from './App';
import rootReducer from './reducers';

const initialState = { listsIndex: { isFetching: false, lists: [], didInvalidate: true } };
const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  ),
);

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl,
);