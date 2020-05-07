import React from 'react';
import PropTypes from 'prop-types';

import Sum from '../../containers/SumStore';
import { Input } from './Input/Input';

import { Form } from 'react-bootstrap';

const Content  = ( props ) => {
  const {
    gettingData: { pending, dataFromAPI , formGridFrome, formGridTo, inputText },
    getTextInput,setToCur, getSumValue,
  } = props;
  
 const handleChangeInput = (event) => {
    if (!isNaN(event.target.value)) {
      getTextInput(event.target.value);
    }
  };

  const handleChange = (event) => {
    setToCur(event.target.selectedOptions[0].text, event.target.id);
    getSumValue(0, 0, 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   const obj = Object.fromEntries(dataFromAPI);
    getSumValue(inputText, obj[formGridFrome], obj[formGridTo], formGridFrome);
    getTextInput('');
  }

    if (pending) return <p>Loading...</p>;
    const list = dataFromAPI.map((key, index) => (
      <option key={index} value={key[0]}>
        {key[0]}
      </option>
    ));

    return (
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Row>
          <Input
            controlId="formGridInput"
            text="Amount"
            as="input"
            placeholder="Enter value"
            value={inputText}
            event={(event) => handleChangeInput(event)}
          />

          <Input
            controlId="formGridFrome"
            text="Base"
            as="select"
            value={formGridFrome}
            name="from"
            list={list}
            event={(event) => handleChange(event)}
          />

          <Input
            controlId="formGridTo"
            text="To"
            as="select"
            value={formGridTo}
            name="to"
            list={list}
            event={(event) => handleChange(event)}
          />
        </Form.Row>
        <Sum />
      </Form>
    );
  }

export default Content;

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
