import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import reducers from "./redux/reducers";
import mySaga from './redux/sagas';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>, document.getElementById('root')
);