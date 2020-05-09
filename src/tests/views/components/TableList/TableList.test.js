import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import expect from 'expect';

import TableList from '../../../../views/components/TableList/TableList';

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
    wrapper = shallow(<TableList {...props} />);
  });
console.log(wrapper);

  it('renders correctly', () => {
    wrapper = shallow(<TableList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const headers = wrapper.find('tbody tr');
    expect(headers).toHaveLength(props.dataFromAPI.length);
  });
});
