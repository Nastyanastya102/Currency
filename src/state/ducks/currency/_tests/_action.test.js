import * as types from '../index';
const { dataTypes, dataOperations } = types;

describe('should return right value from all action creators', () => {
  const sum = (typ) => {
    return { type: typ, value1: 10, value2: 10, value3: 10 };
  };

  it('should create an action to add text value', () => {
    expect(dataOperations.getTextInput(100)).toEqual({
      type: dataTypes.GET_TEXT_INPUT,
      value: 100,
    });
  });

  it('should create an action for get a sum', () => {
    expect(dataOperations.getSum(10, 10, 10)).toEqual(sum(dataTypes.GET_SUM));
  });

  it('should create an action for get a sum for others', () => {
    expect(dataOperations.getSumForOther(10, 10, 10)).toEqual(
      sum(dataTypes.GET_SUM_FOR_OTHER)
    );
  });

  it('should create an action for get a request', () => {
    expect(dataOperations.fetchProductsPending()).toEqual({
      type: dataTypes.FETCH_PRODUCTS_PENDING,
    });
  });

  it('should create an action for get a data', () => {
    const data = {
      type: dataTypes.FETCH_PRODUCTS_SUCCESS,
      dataFromAPI: { rates: { CAD: 1.5077, HKD: 8.43, ISK: 159.3 } },
      formGridFrome: 'EUR',
      date: '2020-04-30',
      formGridTo: 'CAD',
    };
    expect(
      dataOperations.fetchProductsSuccess(
        { rates: { CAD: 1.5077, HKD: 8.43, ISK: 159.3 } },
        'EUR',
        '2020-04-30',
        'CAD'
      )
    ).toEqual(data);
  });

  it('should create an action for get a error ', () => {
    expect(dataOperations.fetchProductsError()).toEqual({
      type: dataTypes.FETCH_PRODUCTS_ERROR,
    });
  });
});
