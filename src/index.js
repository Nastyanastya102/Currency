import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Redux
import { applyMiddleware, createStore } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
//Redux Saga
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './react-saga';
//Redux logger
import logger from 'redux-logger';
//Styles
import styled from 'styled-components';

const StyledContainer = styled.section`
    background-color: #f9f9f9;  
    height: 100vh; 
`;
const sagaMiddleware = createSagaMiddleware();
let store = createStore(rootReducer, applyMiddleware(logger,sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><StyledContainer><App /></StyledContainer></Provider>, document.getElementById('root'));
serviceWorker.unregister();
