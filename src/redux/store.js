import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducers, { rootSaga } from './ducks/currencyDuck';


//Func witch create store
export const configureStore = (initialState = {}) => {
  const rootReducer = combineReducers(reducers);
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(logger, sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
