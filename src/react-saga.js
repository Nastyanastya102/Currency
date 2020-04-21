import { takeEvery , put, call } from 'redux-saga/effects';
import {FETCH_PRODUCTS_PENDING,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_ERROR} from './actions';

//Запрос
async function fetchData() {
  try {
    const response = await fetch('https://api.exchangeratesapi.io/latest');
    const user = await response.json();
    return user;
  } catch (e) {
    console.log(e);
  }
 
}

// Вотчер
export function* watchWork() {
  try{
  const data = yield call(fetchData);
  yield put({type: FETCH_PRODUCTS_SUCCESS, 
   rates: [...Object.entries(data.rates),[data.base , 1]],
   base: data.base,
   date:data.date,
   to: Object.keys(data.rates)[0]});
  }catch(error){
    yield put({type : FETCH_PRODUCTS_ERROR});
    console.log(error);    
  }
  
}
// Воркер
export function* watchLoadData() {
    yield takeEvery(FETCH_PRODUCTS_PENDING,watchWork);
  }

export  function* rootSaga() {
    yield watchLoadData();
}
