import React from 'react';
import PropTypes from 'prop-types';
//Bootstrap
import { Row, Col } from 'react-bootstrap';
//Component

import { Total } from './MainContentStyle';


export function Sum({ sum, formGridTo }) {
    return(
    <Row className="text-center">
        <Col xl={12}>
          {
            sum 
            ? <Total>Total: { sum } { formGridTo }</Total> 
            : <Total opac="true">Total: { sum } { formGridTo }</Total> 
          }                        
        </Col>
     </Row>
    )
}

Sum.propTypes = {
    sum: PropTypes.number,
    to: PropTypes.string,
};

