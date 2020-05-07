import React from 'react';
import PropTypes from 'prop-types';

import { Form, Col } from 'react-bootstrap';
import { StyleForFormHead } from '../../styles/MainContentStyle';

export const Input = ({as, controlId, text, value, placeholder, name, event, list}) => {
  return (
    <Form.Group as={Col} controlId={controlId}>
      <StyleForFormHead>
        {text === 'Base' ? `${text} = ${value}` : text}
      </StyleForFormHead>
      <Form.Control
        as={as}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={event}
      >
        {as === 'input' ? null : list}
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
