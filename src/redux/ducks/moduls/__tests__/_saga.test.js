import * as types from '../index';
import { fetchData, watchWork, watchLoadData } from '../../../react-saga';
import { takeEvery, put, call } from 'redux-saga/effects';

const { dataTypes } = types;

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
      const res = await fetchData();
      expect(res.data).toEqual('12345');
      expect(fetch.mock.calls.length).toBe(1);
    } catch (error) {
      expect(error).toEqual(error);
      expect(fetch.mock.calls.length).toHaveBeenCalled();
    }
  });

  it('Should call watchLoadData and put FETCH_PRODUCTS_PENDING action ', () => {
    const generator = watchLoadData();

    expect(generator.next().value).toEqual(
      takeEvery(dataTypes.FETCH_PRODUCTS_PENDING, watchWork)
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('Should call watchWork and put FETCH_PRODUCTS_SUCCESS or FETCH_PRODUCTS_ERROR action', () => {
    const generator = watchWork();
    const data = {
      rates: { AUD: 1.6598, BGN: 1.9558 },
      base: 'EUR',
      date: '2020-04-30',
    };

    expect(generator.next().value).toEqual(call(fetchData));

    expect(generator.next(data).value).toEqual(
      put({
        type: dataTypes.FETCH_PRODUCTS_SUCCESS,
        data: data,
      })
    );
    expect(generator.throw('error').value).toEqual(
      put({
        type: dataTypes.FETCH_PRODUCTS_ERROR,
      })
    );
    expect(generator.next().done).toBeTruthy();
  });
});
