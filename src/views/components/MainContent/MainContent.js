/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {Form} from 'react-bootstrap';

import { ErrorInfo } from '../ErrorInfo';
import Sum from '../../containers/SumStore';
import {Input} from './Input';

const Content = ({currencyApp, getTextInput, setToCur, getSumValue}) => {

  const handleChangeInput = (event) => {
    if (!isNaN(event.target.value)) {
      getTextInput(event.target.value);
    }
  };

  const handleChange = (event) => {
    setToCur(event.target.selectedOptions[0].text, event.target.id);
    getSumValue(0, 0, 0, event.target.selectedOptions[0].text);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const from = currencyApp.dataFromAPI.findIndex((currentValue) => currentValue.key === currencyApp.formGridFrome);
    const to = currencyApp.dataFromAPI.findIndex((currentValue) => currentValue.key === currencyApp.formGridTo);
     
    getSumValue(
    currencyApp.inputText,
    currencyApp.dataFromAPI[from].value,
    currencyApp.dataFromAPI[to].value,
    currencyApp.formGridFrome
    );
    getTextInput('');
  };
  
  if (currencyApp.pending ) return <p>Loading...</p>;
  if (currencyApp.dataFromAPI.length === 0 || currencyApp.error === true) return <ErrorInfo/>;
  const list = currencyApp.dataFromAPI.map((item, index) => (
    <option key={index} value={item.key}>
      {item.key}
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
          value={currencyApp.inputText}
          event={(event) => handleChangeInput(event)}
        />
        <Input
          controlId="formGridFrome"
          text="Base"
          as="select"
          value={currencyApp.formGridFrome}
          name="from"
          list={list}
          event={(event) => handleChange(event)}
        />
        <Input
          controlId="formGridTo"
          text="To"
          as="select"
          value={currencyApp.formGridTo}
          name="to"
          list={list}
          event={(event) => handleChange(event)}
        />
      </Form.Row>
      <Sum /> 
    </Form>
  );
};

export default Content;

Content.propTypes = {
  getSumValue: PropTypes.func.isRequired,
  getTextInput: PropTypes.func.isRequired,
  setToCur: PropTypes.func.isRequired,
  currencyApp: PropTypes.shape({
    dataFromAPI: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.bool.isRequired,
    formGridFrome: PropTypes.string.isRequired,
    formGridTo: PropTypes.string.isRequired,
    inputText: PropTypes.number.isRequired,
    pending: PropTypes.bool.isRequired
  }),
};

