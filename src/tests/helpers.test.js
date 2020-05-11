import {
  getSumByValue,
  updateState,
  makeObj,
  favorite,
  gettingData
} from '../helpers';

describe('Should return right value for reducers', () => {
  let state = {};
  beforeEach(() => {
    state = {
      pending: false,
      error: false,
      dataFromAPI: [
        {key: 'CAD', value: 1.5118, star: false},
        {key: 'HKD', value: 8.4052, star: false},
        {key: 'EUR', value: 1, star: false},
      ],
      date: '2020-04-30',
      formGridFrome: 'EUR',
      formGridTo: 'CAD',
      inputText: 0,
    };
  });
  
  
  it('Should return new state with rigth sum depends on currency', () => {
    const arg = (cur) => ({
      currency: cur,
      value1: 10,
      value2: 10,
      value3: 10,
    });
    expect(getSumByValue({}, arg('EUR'))).toEqual({sum: 1000});

    expect(getSumByValue({}, arg('CAD'))).toEqual({sum: 10});
  });

  it('Should return array of objects from single array', () => {
    const array = {CAD: 1.5118, HKD: 8.4052};
    expect(makeObj(array)).toEqual(state.dataFromAPI);
  });

  it('Should return new state with indeceted favorite items', () => {
    const item = {key: 'EUR', value: 1, star: false};
    const result = {
      ...state,
      dataFromAPI: [
        {key: 'EUR', value: 1, star: true},
        {key: 'CAD', value: 1.5118, star: false},
        {key: 'HKD', value: 8.4052, star: false},
      ]     
    };
    expect(favorite(item, 2, state)).toEqual(result);
  });

  it('Should return new state with data from API call', () => {
    const action = {
      data: {
        rates: {CAD: 1.5118, HKD: 8.4052},
        base: 'EUR',
        date: '2020-04-30',
      }     
    };
    expect(gettingData(state, action)).toEqual(state);
  });

  it('Should update state and return new state', () => {
    const result = {
      ...state,
      error: true
    };
    expect(updateState(state, {error: true})).toEqual(result);
  });
});
