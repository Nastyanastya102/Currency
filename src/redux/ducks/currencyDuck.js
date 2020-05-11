import { takeEvery, put, call } from 'redux-saga/effects';

import {
  getSumByValue,
  updateState,
  favorite,
  gettingData
} from '../../helpers';

const GET_CURRENCY_RATE = 'https://api.exchangeratesapi.io/latest';

export const FETCH_PRODUCTS_PENDING = 'my-app/gettingData/FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'my-app/gettingData/FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'my-app/gettingData/FETCH_PRODUCTS_ERROR';

export const GET_TEXT_INPUT = 'my-app/gettingData/GET_TEXT_INPUT';
export const SET_TO_CURRENCY = 'my-app/gettingData/SET_TO_CURRENCY';
export const GET_FILTERED_ITEMS = 'my-app/gettingData/GET_FILTERED_ITEMS';

export const GET_SUM = 'my-app/getSum/GET_SUM';

/* Actions */
export const getTextInput = value => ({
    type: GET_TEXT_INPUT,
    value
});

export const getSumValue = (value1, value2, value3, currency) => ({
    type: GET_SUM,
    value1,
    value2,
    value3,
    currency
});


export const setToCur = (value, id) => ({
    type: SET_TO_CURRENCY,
    value,
    id
});

export const filterList = (item, index) => ({
    type: GET_FILTERED_ITEMS,
    item,
    index
});

/* Request actions */

export const fetchProductsPending = () => ({
    type: FETCH_PRODUCTS_PENDING
});

export const fetchProductsSuccess = data => ({
    type: FETCH_PRODUCTS_SUCCESS,
    data
});

export const fetchProductsError = () => ({
    type: FETCH_PRODUCTS_ERROR
});


/* Reducers */
const initialState = {
  pending: false,
  error: false,
  dataFromAPI: [],
  formGridFrome: '',
  formGridTo: '',
  date: '',
  inputText: 0
};

const currencyApp = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return updateState(state, { pending: true });
    case FETCH_PRODUCTS_SUCCESS:
      return gettingData(state, action);
    case FETCH_PRODUCTS_ERROR:
      return updateState(state, { error: true });
    case GET_TEXT_INPUT:
      return updateState(state, { inputText: Number(action.value) });
    case SET_TO_CURRENCY:
      return updateState(state, { [action.id]: action.value });
    case GET_FILTERED_ITEMS:
      return favorite(action.item, action.index, state);
    default:
      return state;
  }
};

 const getSum = (state = { sum: 0 }, action) => {
  switch (action.type) {
    case GET_SUM:
      return getSumByValue(state, action);
    default:
      return state;
  }
};

/* Saga */
export const fetchData = async () => {
  try {
    const response = await fetch(GET_CURRENCY_RATE);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

export function* watchWork() {
  try {
    const data = yield call(fetchData);
    yield put({
      type: FETCH_PRODUCTS_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({ type: FETCH_PRODUCTS_ERROR });
    console.log(error);
  }
}

export function* watchLoadData() {
  yield takeEvery(FETCH_PRODUCTS_PENDING, watchWork);
}

export function* rootSaga() {
  yield watchLoadData();
}

export default {
  currencyApp,
  getSum
};

