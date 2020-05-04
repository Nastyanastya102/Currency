import React from "react";
import PropTypes from "prop-types";
//Bootsrpat
import { Form, Col } from "react-bootstrap";
//Styles
import { StyleForFormHead } from "../MainContentStyle";

export function Input(props) {
  return (
    <Form.Group as={Col} controlId={props.controlId}>
      <StyleForFormHead>{props.text}</StyleForFormHead>
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
