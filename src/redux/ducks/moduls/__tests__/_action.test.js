import * as types from '../currencyApp';

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
      dataFromAPI: { rates: { CAD: 1.5077, HKD: 8.43, ISK: 159.3 } },
      formGridFrome: 'EUR',
      date: '2020-04-30',
      formGridTo: 'CAD',
    };
    expect(
      types.fetchProductsSuccess(
        { rates: { CAD: 1.5077, HKD: 8.43, ISK: 159.3 } },
        'EUR',
        '2020-04-30',
        'CAD'
      )
    ).toEqual(data);
  });

  it('should create an action for get a error ', () => {
    expect(types.fetchProductsError()).toEqual({
      type: types.FETCH_PRODUCTS_ERROR,
    });
  });
});
