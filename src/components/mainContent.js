import React from 'react';
import PropTypes from 'prop-types';
//Bootstrap
import {Form, Col,Row} from 'react-bootstrap';
//Style
import styled from 'styled-components';


const StyleFormGroup = styled.section`
   border: .1px solid transparent;
   border-radius : 20px;
   padding : 2.5em 2em;
   margin: 1.5% 0;
   position: relative;
   background: linear-gradient(45deg,#1c66ec,#C5DDE8);
`;

const StyleForFormHead = styled(Form.Label)`
  font-family: Arial, serif;
  font-size: 20px;
  font-weight: 700;
`;

const Total = styled(StyleForFormHead)`
font-size: 27px;

`;


export default class Content extends React.Component{
//Текстовое поле
handleChangeInput=(event)=>{
  const { getTextInput } = this.props;

  if(!isNaN(event.target.value)){
    getTextInput(event.target.value);
  }
}

//Поле выбора
handleChange=(event)=>{
const {setBaseCur,setToCur} = this.props;
  switch (event.target.name) {
    case "from":
        setBaseCur(event.target.selectedOptions[0].text);
        break;
    case "to":
        setToCur(event.target.selectedOptions[0].text);
        break;
    default: 
     return;
  }
}

//Отправка формы
handleSubmit = (event) =>{
  event.preventDefault();
  const {getTextInput, getSum,getSumForOther,isLoad: { rates,base,to,inputText }} = this.props;
  const obj = Object.fromEntries(rates);

  if(base === 'EUR'){
    getSum(inputText,obj[base],obj[to]);
  }else{
    getSumForOther(inputText,obj[base],obj[to]);  
  } 
  getTextInput('');
}
render(){
const {isLoad: { rates,base,to,inputText }} = this.props;
const {sum: {sum}} = this.props;

if(!rates) return <p>Loading...</p>;
const list = rates.map(([key,sub]) => (        
  <option key={key} value={key}>{key}</option>));

  return (
     <StyleFormGroup >
       <Form onSubmit={(e)=> this.handleSubmit(e)}>
       <Form.Row>

        <Form.Group as={Col} controlId="formGridInput" >
          <StyleForFormHead>Amount</StyleForFormHead>
          <Form.Control value={inputText} onChange={(event) => this.handleChangeInput(event)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridFrome" >
          <StyleForFormHead>From</StyleForFormHead>
          <Form.Control as="select"  name="from" value={base} onChange={(event) => this.handleChange(event)}>
                {list}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTo" >
          <StyleForFormHead>To</StyleForFormHead>
         <Form.Control as="select"  name="to" value={to} onChange={(event) => this.handleChange(event)} >
                {list}
          </Form.Control>
        </Form.Group>

     </Form.Row>
     <Row className="text-center">
       <Col xl={12}>
  <Total>Total: {sum} {to}</Total>         
       </Col>
     </Row>
     </Form>
    </StyleFormGroup>
  );
}
}

Content.propTypes = {
  setBaseCur: PropTypes.func,
  setToCur: PropTypes.func,
  getTextInput: PropTypes.func,
  getSum: PropTypes.func,
  getSumForOther: PropTypes.func,
  rates: PropTypes.array,
  base: PropTypes.string,
  to: PropTypes.string,
  inputText: PropTypes.number, 
  sum: PropTypes.number,
};

