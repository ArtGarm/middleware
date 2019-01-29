import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import { Provider } from "react-redux"
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer } from "./redux"
import { watcherSaga } from "./saga"

import ownMiddleware from './middleware/ownMiddleware'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
    reducer,
    composeWithDevTools( applyMiddleware( sagaMiddleware , ownMiddleware ) )
);

sagaMiddleware.run(watcherSaga);



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
