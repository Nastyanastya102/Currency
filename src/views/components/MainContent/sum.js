/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';

import {Total} from '../../styles/MainContentStyle';

export const Sum = ({sum, formGridTo}) => (
  <Row className="text-center">
    <Col xl={12}>
      {
        sum 
        ? <Total>Total: {sum} {formGridTo}</Total> 
        : <Total opac="true">Total: {sum} {formGridTo}</Total> 
      }                        
    </Col>
  </Row>
);

Sum.propTypes = {
  sum: PropTypes.number,
  to: PropTypes.string,
};

