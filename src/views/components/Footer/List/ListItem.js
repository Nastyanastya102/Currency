import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from 'react-bootstrap';

import {Footer, FooterTitle} from '../../../styles/FooterStyle';

export const ListItem = ({data, title}) => (
  <ListGroup as="ul">
    <Footer>
      <FooterTitle>{title}</FooterTitle>
      <ListGroup as="ul">
      {
        data[0].map((i, index) => (
          <ListGroup.Item action href={i} key={index}>
            {data[1][index]}
          </ListGroup.Item>
        ))
      }
      </ListGroup>
    </Footer>
  </ListGroup>
);

ListItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  title: PropTypes.string.isRequired,
};
