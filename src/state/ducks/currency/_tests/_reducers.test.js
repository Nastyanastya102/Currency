import * as types from '../index';
import { gettingData, getSum } from '../reducers';
const { dataTypes } = types;

describe('should return the new state', () => {
  const state = (pend, err, rat, from, t, dat, text) => {
    let obj = {
      pending: pend || false,
      error: err || false,
      dataFromAPI: rat || [],
      formGridFrome: from || '',
      formGridTo: t || '',
      date: dat || '',
      inputText: text || 0,
    };
    return obj;
  };

  it('should return the initial state', () => {
    expect(gettingData(undefined, {})).toEqual(state());
  });

  it('should handle FETCH_PRODUCTS_PENDING', () => {
    expect(
      gettingData(state(), {
        type: dataTypes.FETCH_PRODUCTS_PENDING,
      })
    ).toEqual(state(true));
  });

  it('should handle FETCH_PRODUCTS_SUCCESS', () => {
    expect(
      gettingData(state(), {
        type: dataTypes.FETCH_PRODUCTS_SUCCESS,
        data: {
          rates: { AUD: 1.6598, BGN: 1.9558 },
          base: 'EUR',
          date: '2020-04-30',
        },
      })
    ).toEqual(
      state(
        false,
        false,
        [
          ['AUD', 1.6598],
          ['BGN', 1.9558],
          ['EUR', 1],
        ],
        'EUR',
        'AUD',
        '2020-04-30'
      )
    );

    expect(
      gettingData(
        state(
          false,
          false,
          [
            ['AUD', 1.6598],
            ['BGN', 1.9558],
            ['EUR', 1],
          ],
          'EUR',
          'AUD',
          '2020-04-30'
        ),
        {
          type: dataTypes.FETCH_PRODUCTS_SUCCESS,
          data: {
            rates: { AUD: 2.44, BGN: 1.555 },
            base: 'EUR',
            date: '2020-05-30',
          },
        }
      )
    ).toEqual(
      state(
        false,
        false,
        [
          ['AUD', 2.44],
          ['BGN', 1.555],
          ['EUR', 1],
        ],
        'EUR',
        'AUD',
        '2020-05-30'
      )
    );
  });

  it('should handle FETCH_PRODUCTS_ERROR', () => {
    expect(
      gettingData(state(), {
        type: dataTypes.FETCH_PRODUCTS_ERROR,
      })
    ).toEqual(state(false, true));
  });

  it('sould return GET_TEXT_INPUT', () => {
    expect(
      gettingData(state(), {
        type: dataTypes.GET_TEXT_INPUT,
        value: '100',
      })
    ).toEqual(state(false, false, false, false, false, false, 100));
  });

  it('sould return SET_TO_CURRENCY', () => {
    expect(
      gettingData(state(), {
        type: dataTypes.SET_TO_CURRENCY,
        value: 'CAD',
        id: 'formGridFrome',
      })
    ).toEqual(state(false, false, false, 'CAD'));
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
