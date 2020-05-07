import React from 'react';
import PropTypes from 'prop-types';

import { Form, Col } from 'react-bootstrap';
import { StyleForFormHead } from '../../../styles/MainContentStyle';

export const Input = props => {
  return (
    <Form.Group as={Col} controlId={props.controlId}>
      <StyleForFormHead>
        {props.text === 'Base' ? `${props.text} = ${props.value}` : props.text}
      </StyleForFormHead>
      <Form.Control
        as={props.as}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.event}
      >
        {props.as === 'input' ? null : props.list}
      </Form.Control>
    </Form.Group>
  );
}

Input.propTypes = {
  controlId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  as: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  event: PropTypes.func.isRequired,
};
