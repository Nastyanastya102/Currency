import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import expect from 'expect';

import TableList from '../../../../src/views/components/TableList';

const props = {
  dataFromAPI: [
    [1, 'EUR'],
    [2, 'CAD'],
    [3, 'RUB'],
  ],
};

describe('Should render MainContent', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TableList {...props} />);
  });

  it('renders correctly', () => {
    wrapper = shallow(<TableList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const headers = wrapper.find('tbody tr');
    expect(headers).toHaveLength(props.dataFromAPI.length);
  });
});
