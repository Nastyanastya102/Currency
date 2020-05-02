import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import * as reducers from "./ducks"; // import all reducers from ducks/index.js
import { rootSaga } from './react-saga';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

//Func witch create store
export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers(reducers);
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(logger,sagaMiddleware)
  ));
  sagaMiddleware.run(rootSaga);
 return store;
}


