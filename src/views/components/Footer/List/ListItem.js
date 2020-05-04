import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
//Styled
import { Footer, FooterTitle } from '../FooterStyle';

export default function Item(props) {
  return (
    <ListGroup as="ul">
      <Footer>
        <FooterTitle>{props.title}</FooterTitle>
        <ListGroup.Item action href={props.firsHr}>
          {props.fist}
        </ListGroup.Item>
        <ListGroup.Item action href={props.secHr}>
          {props.sec}
        </ListGroup.Item>
        <ListGroup.Item action href={props.thersHr}>
          {props.ther}
        </ListGroup.Item>
        <ListGroup.Item action href={props.foursHr}>
          {props.forth}
        </ListGroup.Item>
      </Footer>
    </ListGroup>
  );
}

Item.propTypes = {
  fist: PropTypes.string.isRequired,
  sec: PropTypes.string.isRequired,
  ther: PropTypes.string.isRequired,
  forth: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  firsHr: PropTypes.string.isRequired,
  secHr: PropTypes.string.isRequired,
  thersHr: PropTypes.string.isRequired,
  foursHr: PropTypes.string.isRequired,
};
