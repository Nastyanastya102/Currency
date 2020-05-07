import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { rootSaga } from './ducks/moduls/currencyApp';
import  reducers from './ducks/moduls/currencyApp'; 


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
