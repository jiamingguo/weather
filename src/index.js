import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

// middleware is like a gatekeeper
// it works after an action is created but before sent to all reducers
// it will help us handle request 'promise'
// when action's payload is a promise, middleware will handle (unwrap) it before passed to reducer
// it will pass a same action but with unwrapped object as payload, so the reducer can directly handle it
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
