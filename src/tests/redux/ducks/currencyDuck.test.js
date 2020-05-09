import { takeEvery, put, call } from 'redux-saga/effects';

import * as types from '../../../redux/ducks/currency/currencyDuck';

describe('should return right value from all action creators', () => {
  const sum = (typ) => {
    return { type: typ, value1: 10, value2: 10, value3: 10, currency: 'EUR' };
  };

  it('should create an action to add text value', () => {
    expect(types.getTextInput(100)).toEqual({
      type: types.GET_TEXT_INPUT,
      value: 100,
    });
  });

  it('should create an action for get a sum for others', () => {
    expect(types.getSumValue(10, 10, 10, 'EUR')).toEqual(
      sum(types.GET_SUM, 'EUR')
    );
  });

  it('should create an action for get a request', () => {
    expect(types.fetchProductsPending()).toEqual({
      type: types.FETCH_PRODUCTS_PENDING,
    });
  });

  it('should create an action for get a data', () => {
    const data = {
      type: types.FETCH_PRODUCTS_SUCCESS,
      data: { rates: { CAD: 1.5077, HKD: 8.43 }, base: 'EUR', date: '2020-04-30' },
    };
    expect(
      types.fetchProductsSuccess(
        { rates: { CAD: 1.5077, HKD: 8.43 }, base: 'EUR', date: '2020-04-30' },
      )
    ).toEqual(data);
  });

  it('should create an action for get a error ', () => {
    expect(types.fetchProductsError()).toEqual({
      type: types.FETCH_PRODUCTS_ERROR,
    });
  });
});





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
    dataFromAPI: [{ key: 'CAD', value: 1.5118, star: false }, { key: 'HKD', value: 8.4052, star: false }, { key: 'EUR', value: 1, star: false }],
    date: '2020-05-08',
    formGridFrome: 'EUR',
    formGridTo: 'CAD',
  };
  it('should return the initial state', () => {
    expect(types.default.currencyApp(undefined, {})).toEqual(state);
  });

  it('should handle FETCH_PRODUCTS_PENDING', () => {
    expect(
      types.default.currencyApp(state, {
        type: types.FETCH_PRODUCTS_PENDING,
      })
    ).toEqual({ ...state, pending: true });
  });

  it('should handle FETCH_PRODUCTS_SUCCESS', () => {
    expect(
      types.default.currencyApp(state, {
        type: types.FETCH_PRODUCTS_SUCCESS,
        data: {
        base: "EUR",
        date: "2020-05-08",
        rates: {CAD: 1.5118, HKD: 8.4052}
      },
    })
    ).toEqual(successState);
  });

  it('should handle FETCH_PRODUCTS_ERROR', () => {
    expect(
      types.default.currencyApp(state, {
        type: types.FETCH_PRODUCTS_ERROR,
      })
    ).toEqual({ ...state, error: true });
  });

  it('sould return GET_TEXT_INPUT', () => {
    expect(
      types.default.currencyApp(state, {
        type: types.GET_TEXT_INPUT,
        value: '100',
      })
    ).toEqual({ ...state, inputText: 100 });
  });

  it('sould return SET_TO_CURRENCY', () => {
    expect(
      types.default.currencyApp(state, {
        type: types.SET_TO_CURRENCY,
        value: 'HKD',
        id: 'formGridFrome',
      })
    ).toEqual({ ...state, formGridFrome: 'HKD' });
  });
});

describe('should return right sum', () => {
  it('should return the initial state', () => {
    expect(types.default.getSum(undefined, {})).toEqual({ sum: 0 });
  });

  it('should return GET_SUM for EUR', () => {
    expect(
      types.default.getSum(
        { sum: 0 },
        {
          type: types.GET_SUM,
          value1: 10,
          value2: 15,
          value3: 20,
          currency: 'EUR',
        }
      )
    ).toEqual({ sum: 3000 });
  });
});




describe('All sagas', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Should return data from Api calls', async () => {
    fetch.mockResponseOnce(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve(JSON.stringify({ data: '12345' })))
        )
    );
    try {
      const res = await types.fetchData();
      expect(res.data).toEqual('12345');
      expect(fetch.mock.calls.length).toBe(1);
    } catch (error) {
      expect(error).toEqual(error);
      expect(fetch.mock.calls.length).toHaveBeenCalled();
    }
  });

  it('Should call watchLoadData and put FETCH_PRODUCTS_PENDING action ', () => {
    const generator = types.watchLoadData();

    expect(generator.next().value).toEqual(
      takeEvery(types.FETCH_PRODUCTS_PENDING, types.watchWork)
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('Should call watchWork and put FETCH_PRODUCTS_SUCCESS or FETCH_PRODUCTS_ERROR action', () => {
    const generator = types.watchWork();
    const data = {
      rates: { AUD: 1.6598, BGN: 1.9558 },
      base: 'EUR',
      date: '2020-04-30',
    };

    expect(generator.next().value).toEqual(call(types.fetchData));

    expect(generator.next(data).value).toEqual(
      put({
        type: types.FETCH_PRODUCTS_SUCCESS,
        data: data,
      })
    );
    expect(generator.throw('error').value).toEqual(
      put({
        type: types.FETCH_PRODUCTS_ERROR,
      })
    );
    expect(generator.next().done).toBeTruthy();
  });
});
