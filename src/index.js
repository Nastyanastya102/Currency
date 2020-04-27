import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Redux
import { applyMiddleware, createStore, compose  } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
//Redux Saga
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './react-saga';
//Redux logger
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,  composeEnhancers(
    applyMiddleware(logger,sagaMiddleware)
  ));
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
