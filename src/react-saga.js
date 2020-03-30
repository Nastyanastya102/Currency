import { takeEvery , put, call,all } from 'redux-saga/effects';

import {FETCH_PRODUCTS_PENDING,fetchProductsSuccess} from './actions';

function fetchData() {
 return fetch('https://api.exchangeratesapi.io/latest')
  .then(response => response.json())
}
export function* watchWork() {
  const data = yield call(fetchData);
  yield put(fetchProductsSuccess([...Object.entries(data.rates),[data.base , 1]],data.base,data.date,Object.keys(data.rates)[0]));
}

export function* watchLoadData() {
    yield takeEvery(FETCH_PRODUCTS_PENDING,watchWork);
  }

export  function* rootSaga() {
    yield all([
      watchLoadData(),
      watchWork(),
    ])
}