import React from 'react';
import PropTypes from 'prop-types';

import Sum from '../../containers/SumStore';
import { Input } from './Input/Input';

import { Form } from 'react-bootstrap';

export default class Content extends React.Component {
  
  handleChangeInput = (event) => {
    const { getTextInput } = this.props;

    if (!isNaN(event.target.value)) {
      getTextInput(event.target.value);
    }
  };

  handleChange = (event) => {
    const { setToCur, getSumValue } = this.props;
    setToCur(event.target.selectedOptions[0].text, event.target.id);
    getSumValue(0, 0, 0);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      getTextInput,
      getSumValue,
      gettingData: { dataFromAPI, formGridFrome, formGridTo, inputText },
    } = this.props;

    const obj = Object.fromEntries(dataFromAPI);
    getSumValue(inputText, obj[formGridFrome], obj[formGridTo], formGridFrome);
    getTextInput('');
  };
  render() {
    const {
      gettingData: { pending, dataFromAPI, formGridFrome, formGridTo, inputText },
    } = this.props;

    if (pending) return <p>Loading...</p>;
    const list = dataFromAPI.map((key, index) => (
      <option key={index} value={key[0]}>
        {key[0]}
      </option>
    ));

    return (
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <Form.Row>
          <Input
            controlId="formGridInput"
            text="Amount"
            as="input"
            placeholder="Enter value"
            value={inputText}
            event={(event) => this.handleChangeInput(event)}
          />

          <Input
            controlId="formGridFrome"
            text="Base"
            as="select"
            value={formGridFrome}
            name="from"
            list={list}
            event={(event) => this.handleChange(event)}
          />

          <Input
            controlId="formGridTo"
            text="To"
            as="select"
            value={formGridTo}
            name="to"
            list={list}
            event={(event) => this.handleChange(event)}
          />
        </Form.Row>
        <Sum />
      </Form>
    );
  }
}

Content.propTypes = {
  gettingData: PropTypes.shape({
    date: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
    formGridFrome: PropTypes.string.isRequired,
    formGridTo: PropTypes.string.isRequired,
    inputText: PropTypes.number.isRequired,
    pending: PropTypes.bool.isRequired,
    dataFromAPI: PropTypes.array.isRequired,
  }),
  setToCur: PropTypes.func.isRequired,
  getTextInput: PropTypes.func.isRequired,
  getSumValue: PropTypes.func.isRequired,
  fetchProductsPending: PropTypes.func.isRequired,
};
