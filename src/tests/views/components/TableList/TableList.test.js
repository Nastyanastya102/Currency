import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import expect from 'expect';

import { Table } from '../../../../views/components';

const props = {
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
  filterList: jest.fn()
};

describe('Should render MainContent', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Table {...props} />);
  });
  
  it('renders correctly', () => {
    wrapper = shallow(<Table {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const headers = wrapper.find('tbody tr');
    expect(headers).toHaveLength(props.dataFromAPI.length);
  });
});
