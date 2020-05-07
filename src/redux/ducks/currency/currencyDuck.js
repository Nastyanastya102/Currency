import { takeEvery, put, call } from 'redux-saga/effects';

export const FETCH_PRODUCTS_PENDING = 'my-app/gettingData/FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'my-app/gettingData/FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'my-app/gettingData/FETCH_PRODUCTS_ERROR';

export const GET_SUM = 'my-app/gettingValue/GET_SUM';
export const GET_TEXT_INPUT = 'my-app/gettingValue/GET_TEXT_INPUT';
export const SET_TO_CURRENCY = 'my-app/gettingSum/SET_TO_CURRENCY';

export const GET_FILTERED_ITEMS = 'my-app/gettingList/GET_FILTERED_ITEMS';

/* Actions */

export const getTextInput = value => {
  return {
    type: GET_TEXT_INPUT,
    value,
  };
}

export const getSumValue = (value1, value2, value3, currency) => {
  return {
    type: GET_SUM,
    value1,
    value2,
    value3,
    currency,
  };
}

export const setToCur = (value, id) => {
  return {
    type: SET_TO_CURRENCY,
    value,
    id,
  };
}

export const filterList = (payload, index) => {
  return {
    type: GET_FILTERED_ITEMS,
    payload,
    index,
  };
}

/* Request actions */

export const fetchProductsPending = () => {
  return {
    type: FETCH_PRODUCTS_PENDING,
  };
}

export const fetchProductsSuccess = (dataFromAPI, formGridFrome, date, formGridTo) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    dataFromAPI,
    formGridFrome,
    formGridTo,
    date,
  };
}

export const fetchProductsError = () => {
  return {
    type: FETCH_PRODUCTS_ERROR,
  };
}


/* Reducers */

const initialStateGetData = {
  pending: false,
  error: false,
  dataFromAPI: [],
  formGridFrome: '',
  formGridTo: '',
  date: '',
  inputText: 0,
  filtered: [],
};

export const sumFunc = arg => {
  let sum;
  arg.currency === 'EUR'
    ? (sum = +(arg.value1 * arg.value2 * arg.value3).toFixed(2))
    : (sum = +(((100 * arg.value3) / (100 * arg.value2)) * arg.value1).toFixed(
        2
      ));
  return sum;
}

const filter = (data, index, dataFromAPI) => {
  console.log(data);
  console.log(index);
  console.log(dataFromAPI);

  return dataFromAPI;
}

const gettingData = (state = initialStateGetData, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
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
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        error: true,
      };
    case GET_TEXT_INPUT:
      return {
        ...state,
        inputText: +action.value,
      };
    case SET_TO_CURRENCY:
      return {
        ...state,
        [action.id]: action.value,
      };
    case GET_FILTERED_ITEMS:
      return {
        ...state,
        dataFromAPI: filter(action.payload, action.index, state.dataFromAPI),
      };
    default:
      return state;
  }
}


 const getSum = (state = { sum: 0 }, action) => {
  switch (action.type) {
    case GET_SUM:
      return {
        ...state,
        sum: sumFunc(action),
      };
    default:
      return state;
  }
}

export default  {
  gettingData,
  getSum
};




/* Saga */

export async function fetchData() {
  try {
    const response = await fetch('https://api.exchangeratesapi.io/latest');
    const user = await response.json();
    return user;
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
};

export function* watchLoadData() {
  yield takeEvery(FETCH_PRODUCTS_PENDING, watchWork);
};

export function* rootSaga() {
  yield watchLoadData();
};
