import React from 'react';
import PropTypes from 'prop-types';
//Component
import Sum from '../../containers/SumStore';
import { Input } from './Input/Input';
//Bootstrap
import { Form} from 'react-bootstrap';

export  default class Content extends React.Component{
//Текстовое поле
  handleChangeInput=(event)=>{
    const { getTextInput } = this.props;

    if(!isNaN(event.target.value)){
      getTextInput(event.target.value);
    }
  }

//Поле выбора
  handleChange=(event)=>{
  const {setToCur,getSum} = this.props;
      setToCur(event.target.selectedOptions[0].text,event.target.id);
      getSum(0,0,0);
  }

//Отправка формы
handleSubmit = (event) =>{
  event.preventDefault();
  const {getTextInput, getSum,getSumForOther,isLoad: { dataFromAPI,formGridFrome,formGridTo,inputText }} = this.props;
  const obj = Object.fromEntries(dataFromAPI);

  if(formGridFrome === 'EUR'){
    getSum(inputText,obj[formGridFrome],obj[formGridTo]);
  }else{
    getSumForOther(inputText,obj[formGridFrome],obj[formGridTo]);  
  } 
    getTextInput('');
}
render(){
const {isLoad: { pending,dataFromAPI,formGridFrome,formGridTo,inputText }} = this.props;
if(pending) return <p>Loading...</p>;
const list = dataFromAPI.map(([key,sub]) => (        
  <option key={key} value={key}>{key}</option>));

  return (
       <Form onSubmit={(e)=> this.handleSubmit(e)}>
       <Form.Row>
        <Input
        controlId='formGridInput'
        text='Amount'
        as='input'
        placeholder='Enter value'
        value={inputText}
        event={(event) => this.handleChangeInput(event)}/>

        <Input
        controlId='formGridFrome'
        text='From'
        as='select'
        value={formGridFrome}
        name="from"
        list={list}
        event={(event) => this.handleChange(event)}/>

        <Input
        controlId='formGridTo'
        text='To'
        as='select'
        value={formGridTo}
        name="to"
        list={list}
        event={(event) => this.handleChange(event)}/>
     </Form.Row>
     <Sum/>  
     </Form>
  );
}
}

Content.propTypes = {
  isLoad: PropTypes.shape({
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
  getSum: PropTypes.func.isRequired,
  getSumForOther: PropTypes.func.isRequired,
  fetchProductsPending : PropTypes.func.isRequired,
};
