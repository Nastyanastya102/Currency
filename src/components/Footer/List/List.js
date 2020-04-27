import React from 'react';
import {Col} from 'react-bootstrap';

export default function List(props) {
    return (
        <>
            <Col md={{ span: 3, offset: 1 }} lg={{span: 3, offset: 2 }}>
            {props.top}
            </Col>
            <Col md={{ span: 3}} lg={{span: 3}}>
            {props.bottom}
            </Col>
       </>
    );
  }