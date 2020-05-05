import { combineReducers } from 'redux';
import types from './types';

const initialStateGetData = {
  pending: false,
  error: false,
  dataFromAPI: [],
  formGridFrome: '',
  formGridTo: '',
  date: '',
  inputText: 0,
};

function sumFunc(arg) {
  let sum;
  arg.currency === 'EUR'
    ? (sum = +(arg.value1 * arg.value2 * arg.value3).toFixed(2))
    : (sum = +(((100 * arg.value3) / (100 * arg.value2)) * arg.value1).toFixed(
        2
      ));
  return sum;
}

export function gettingData(state = initialStateGetData, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        dataFromAPI: [
          ...Object.entries(action.data.rates),
          [action.data.base, 1],
        ],
        formGridFrome: action.data.base,
        date: action.data.date,
        formGridTo: Object.keys(action.data.rates)[0],
        pending: false,
      };
    case types.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        error: true,
      };
    case types.GET_TEXT_INPUT:
      return {
        ...state,
        inputText: +action.value,
      };
    case types.SET_TO_CURRENCY:
      return {
        ...state,
        [action.id]: action.value,
      };
    default:
      return state;
  }
}

const initialStateSum = {
  sum: 0,
};

export function getSum(state = initialStateSum, action) {
  switch (action.type) {
    case types.GET_SUM:
      return {
        ...state,
        sum: sumFunc(action),
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  isLoad: gettingData,
  sum: getSum,
});

export default rootReducer;
