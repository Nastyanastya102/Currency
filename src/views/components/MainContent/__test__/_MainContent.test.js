import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import expect from 'expect';

import Content from '../MainContent';

const props = {
  gettingData: {
    pending: false,
    error: false,
    dataFromAPI: [],
    formGridFrome: '',
    formGridTo: '',
    inputText: 0,
    date: '',
  },
  getTextInput: jest.fn(),
  setToCur: jest.fn(),
  getSumValue: jest.fn(),
  fetchProductsPending: jest.fn(),
};
describe('Should render MainContent', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Content {...props} />);
  });

  it('renders correctly', () => {
    wrapper = shallow(<Content {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should return Loading text', () => {
    const nextProps = {
      ...props,
      gettingData: {
        ...props.gettingData,
        pending: true,
      },
    };
    wrapper = shallow(<Content {...nextProps} />);
    expect(wrapper.find('p').text()).toEqual('Loading...');
  });

  it('Should return 3 Inputs and Sum component', () => {
    expect(wrapper.find('Input')).toHaveLength(3);
    expect(wrapper.find('Connect(Sum)')).toHaveLength(1);
  });

  it('Should simulate onSubmit', () => {
    wrapper.find('Form').simulate('submit', {
      preventDefault: () => {},
    });
  });
});
