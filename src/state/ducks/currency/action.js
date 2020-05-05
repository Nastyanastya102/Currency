import types from './types';

// Get Input Value
function getTextInput(value) {
  return {
    type: types.GET_TEXT_INPUT,
    value,
  };
}

// Get Sum . EUR base
function getSum(value1, value2, value3, currency) {
  return {
    type: types.GET_SUM,
    value1,
    value2,
    value3,
    currency,
  };
}

// Set currency
function setToCur(value, id) {
  return {
    type: types.SET_TO_CURRENCY,
    value,
    id,
  };
}

// Request
function fetchProductsPending() {
  return {
    type: types.FETCH_PRODUCTS_PENDING,
  };
}

// Get dataFromAPI
function fetchProductsSuccess(dataFromAPI, formGridFrome, date, formGridTo) {
  return {
    type: types.FETCH_PRODUCTS_SUCCESS,
    dataFromAPI,
    formGridFrome,
    formGridTo,
    date,
  };
}

// Catch error
function fetchProductsError() {
  return {
    type: types.FETCH_PRODUCTS_ERROR,
  };
}

export default {
  getTextInput,
  getSum,
  setToCur,
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
};
