import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import expect from 'expect';

import { MainContent } from '../../../../views/components/';

const props = {
  currencyApp: {
    dataFromAPI: [
      { key: 'CAD', value: 1.5118, star: false }, 
      { key: 'HKD', value: 8.4052, star: false }
    ],
    date: "2020-05-08",
    error: false,
    formGridFrome: "EUR",
    formGridTo: "CAD",
    inputText: 0,
    pending: false,
  },
  getTextInput: jest.fn(),
  setToCur: jest.fn(),
  getSumValue: jest.fn(),
  fetchProductsPending: jest.fn(),
};
describe('Should render MainContent', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MainContent {...props} />);
  });

  it('renders correctly', () => {
    wrapper = shallow(<MainContent {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should return Loading text', () => {
    const nextProps = {
      ...props,
      currencyApp: {
        ...props.currencyApp,
        pending: true,
      },
    };
    wrapper = shallow(<MainContent {...nextProps} />);
    expect(wrapper.find('p').text()).toEqual('Loading...');
  });

  it('Should return 3 Inputs and Sum component', () => {
    expect(wrapper.find('Input')).toHaveLength(3);
    expect(wrapper.find('Connect(Sum)')).toHaveLength(1);
  });

});
