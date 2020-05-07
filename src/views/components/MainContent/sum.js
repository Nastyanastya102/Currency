import React from 'react';
import PropTypes from 'prop-types';

import { Total } from '../../styles/MainContentStyle';

import { Row, Col } from 'react-bootstrap';

export const Sum = ({ sum, formGridTo }) => {
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

