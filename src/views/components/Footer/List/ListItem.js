import React from 'react';
import PropTypes from 'prop-types';
//Bootstrap
import { ListGroup } from 'react-bootstrap';
//Styled
import { Footer, FooterTitle } from '../FooterStyle';

export function ListItem(props) {
  let item = props.data[0].map((i, index) => (
    <ListGroup.Item action href={i} key={index}>
      {props.data[1][index]}
    </ListGroup.Item>
  ));
  return (
    <ListGroup as="ul">
      <Footer>
        <FooterTitle>{props.title}</FooterTitle>
        <ListGroup as="ul">{item}</ListGroup>
      </Footer>
    </ListGroup>
  );
}

ListItem.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
