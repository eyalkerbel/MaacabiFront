import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, applyMiddleware, compose } from 'redux';
import rootReducer from "./Reducers/index";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';


import thunk from 'redux-thunk';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()



const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
