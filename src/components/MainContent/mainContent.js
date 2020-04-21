import React from 'react';
import PropTypes from 'prop-types';
//Component
import Sum from '../../containers/sumStore';
//Bootstrap
import {Form,Col} from 'react-bootstrap';
//Styles
import {StyleForFormHead} from './mainContentStyle';

export default class Content extends React.Component{
  componentDidMount() {      
     this.props.fetchProductsPending();
    }
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
  const {getTextInput, getSum,getSumForOther,isLoad: { rates,formGridFrome,formGridTo,inputText }} = this.props;
  const obj = Object.fromEntries(rates);

  if(formGridFrome === 'EUR'){
    getSum(inputText,obj[formGridFrome],obj[formGridTo]);
  }else{
    getSumForOther(inputText,obj[formGridFrome],obj[formGridTo]);  
  } 
    getTextInput('');
}
render(){

const {isLoad: { pending,rates,formGridFrome,formGridTo,inputText }} = this.props;

if(pending) return <p>Loading...</p>;
const list = rates.map(([key,sub]) => (        
  <option key={key} value={key}>{key}</option>));

  return (
       <Form onSubmit={(e)=> this.handleSubmit(e)}>
       <Form.Row>

        <Form.Group as={Col} controlId="formGridInput" >
          <StyleForFormHead>Amount</StyleForFormHead>
          <Form.Control value={inputText}  placeholder="Enter value" onChange={(event) => this.handleChangeInput(event)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridFrome" >
          <StyleForFormHead>From</StyleForFormHead>
          <Form.Control as="select"  name="from" value={formGridFrome} onChange={(event) => this.handleChange(event)}>
                {list}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTo" >
          <StyleForFormHead>To</StyleForFormHead>
         <Form.Control as="select"  name="to" value={formGridTo} onChange={(event) => this.handleChange(event)} >
                {list}
          </Form.Control>
        </Form.Group>
     </Form.Row>
     <Sum/>
     </Form>
  );
}
}

Content.propTypes = {
  setBaseCur: PropTypes.func,
  setToCur: PropTypes.func,
  getTextInput: PropTypes.func,
  getSum: PropTypes.func,
  getSumForOther: PropTypes.func,
  isLoad: PropTypes.object, 
  fetchProductsPending : PropTypes.func,
};

