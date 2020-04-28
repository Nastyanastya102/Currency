import PropTypes from 'prop-types';
import React from 'react';
//Bootstrap
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
};


List.propTypes = {
    top: PropTypes.element.isRequired,
    bottom: PropTypes.element.isRequired,  
};
  