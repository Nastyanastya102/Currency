import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

import { Footer, FooterTitle } from '../../../styles/FooterStyle';

export const ListItem = props => (
    <ListGroup as="ul">
      <Footer>
        <FooterTitle>{props.title}</FooterTitle>
        <ListGroup as="ul">
        {
          props.data[0].map((i, index) => (
          <ListGroup.Item action href={i} key={index}>
            { props.data[1][index] }
          </ListGroup.Item>
          ))
        }
        </ListGroup>
      </Footer>
    </ListGroup>
);

ListItem.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
