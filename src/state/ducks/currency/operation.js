import actions from "./action";
//Action Creaters
const fetchProductsPending = actions.fetchProductsPending;
const fetchProductsSuccess = actions.fetchProductsSuccess;
const fetchProductsError = actions.fetchProductsError;


const getTextInput = actions.getTextInput;
const getSum = actions.getSum;
const getSumForOther = actions.getSumForOther;
const setToCur = actions.setToCur;

export default {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
  getTextInput,
  getSum,
  getSumForOther,
  setToCur
};
