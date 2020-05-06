import * as types from '../index';
import { gettingData, getSum } from '../reducers';
const { dataTypes } = types;

describe('should return the new state', () => {
  const state = {
    pending: false,
    error: false,
    dataFromAPI: [],
    formGridFrome: '',
    formGridTo: '',
    date: '',
    inputText: 0,
  };
  const successState = {
    ...state,
    dataFromAPI: [
      ['AUD', 1.6598],
      ['BGN', 1.9558],
      ['EUR', 1],
    ],
    date: '2020-04-30',
    formGridFrome: 'EUR',
    formGridTo: 'AUD',
  };
  it('should return the initial state', () => {
    expect(gettingData(undefined, {})).toEqual(state);
  });

  it('should handle FETCH_PRODUCTS_PENDING', () => {
    expect(
      gettingData(state, {
        type: dataTypes.FETCH_PRODUCTS_PENDING,
      })
    ).toEqual({ ...state, pending: true });
  });

  it('should handle FETCH_PRODUCTS_SUCCESS', () => {
    expect(
      gettingData(state, {
        type: dataTypes.FETCH_PRODUCTS_SUCCESS,
        data: {
          rates: { AUD: 1.6598, BGN: 1.9558 },
          base: 'EUR',
          date: '2020-04-30',
        },
      })
    ).toEqual(successState);
  });

  it('should handle FETCH_PRODUCTS_ERROR', () => {
    expect(
      gettingData(state, {
        type: dataTypes.FETCH_PRODUCTS_ERROR,
      })
    ).toEqual({ ...state, error: true });
  });

  it('sould return GET_TEXT_INPUT', () => {
    expect(
      gettingData(state, {
        type: dataTypes.GET_TEXT_INPUT,
        value: '100',
      })
    ).toEqual({ ...state, inputText: 100 });
  });

  it('sould return SET_TO_CURRENCY', () => {
    expect(
      gettingData(state, {
        type: dataTypes.SET_TO_CURRENCY,
        value: 'CAD',
        id: 'formGridFrome',
      })
    ).toEqual({ ...state, formGridFrome: 'CAD' });
  });
});

describe('should return right sum', () => {
  it('should return the initial state', () => {
    expect(getSum(undefined, {})).toEqual({ sum: 0 });
  });

  it('should return GET_SUM for EUR', () => {
    expect(
      getSum(
        { sum: 0 },
        {
          type: dataTypes.GET_SUM,
          value1: 10,
          value2: 15,
          value3: 20,
          currency: 'EUR',
        }
      )
    ).toEqual({ sum: 3000 });
  });
});
