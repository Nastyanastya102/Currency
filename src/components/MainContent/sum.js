import React from 'react';
import PropTypes from 'prop-types';
//Bootstrap
import {Row, Col} from 'react-bootstrap';
//Component

import {Total} from './mainContentStyle';


export function Sum({sum, to}) {
    return(
    <Row className="text-center">
        <Col xl={12}>
          {
            sum 
            ? <Total>Total: {sum} {to}</Total> 
            : null
          }                        
        </Col>
     </Row>
    )
}

Sum.propTypes = {
    sum: PropTypes.number,
    to: PropTypes.string,
};

