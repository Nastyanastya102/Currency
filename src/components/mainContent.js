import React from 'react';
import PropTypes from 'prop-types';
//Bootstrap
import {Form, Col} from 'react-bootstrap';
//Style
import styled from 'styled-components';


const StyleFormGroup = styled(Form)`
   border: .1px solid transparent;
   border-radius : 20px;
   padding : 9em 2em;
   margin: 2% 0;
   position: relative;
   background: linear-gradient(45deg,#0b1d3e,#C5DDE8);
   .form-left-decoration,
   .form-right-decoration {
     content: "";
     position: absolute;
     width: 50px;
     height: 20px;
     border-radius: 20px;
   }
   .form-left-decoration {
     bottom: 60px;
     left: -30px;
     background: linear-gradient(45deg,#0b1d3e,#1c2e4d);
   }
   .form-right-decoration {
     top: 60px;
     right: -30px;
     background: #b6cfda;
   }
   .form-left-decoration:before,
   .form-left-decoration:after,
   .form-right-decoration:before,
   .form-right-decoration:after {
     content: "";
     position: absolute;
     width: 50px;
     height: 20px;
     border-radius: 30px;
     background: #f9f9f9;
   }
   .form-left-decoration:before {top: -20px;}
   .form-left-decoration:after {
     top: 20px;
     left: 10px;
   }
   .form-right-decoration:before {
     top: -20px;
     right: 0;
   }
   .form-right-decoration:after {
     top: 20px;
     right: 10px;
   }
`;

export default class Content extends React.Component{
  constructor({props}){
    super(props);
  }
handleChangeInput=(e)=>{
    const { getTextInput } = this.props;
    getTextInput(e.target.value)
  }
handleChange=(e)=>{
    const { getText } = this.props;
    getText(e.target.value,e.target.id)
  }
render(){
const {isLoad: {rates : { rates }}} = this.props;
const {random: {value}} = this.props;
const {random: {inputText}} = this.props;

if(!rates) return <p>Loading...</p>;
const list = Object.entries(rates).map(([key, subject], i) => (        
  <option key={subject} value={subject}>{key}</option>));

  return (
     <StyleFormGroup>
       <div className="form-left-decoration"></div>
       <div className="form-right-decoration"></div>
       <Form.Row>
        <Form.Group as={Col} controlId="formGridInput" >
          <Form.Label>Amount</Form.Label>
          <Form.Control value={inputText} onChange={this.handleChangeInput}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridFrome" >
          <Form.Label>From</Form.Label>
          <Form.Control as="select" value={value} onChange={this.handleChange}>
                  {list}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTo" >
          <Form.Label>To</Form.Label>
          <Form.Control as="select" value={value} onChange={this.handleChange}>
                   {list}
          </Form.Control>
        </Form.Group>
     </Form.Row>
     <Row className="text-center">
       <Col xl={12}>
         <Total>Total: {sum}</Total>         
       </Col>
     </Row>
     </Form>
    </StyleFormGroup>
  );
}
}

Content.propTypes = {
  name: PropTypes.object,
  value:  PropTypes.number,
  inputText:  PropTypes.string, 
};