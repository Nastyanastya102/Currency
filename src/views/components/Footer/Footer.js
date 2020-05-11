/* eslint-disable no-unused-vars */
import React from 'react';
import {Container} from 'react-bootstrap';

import {ListItem} from './List/ListItem';
import {List} from './List/List';
import {dataForItems} from './FooterData';
import {
  FooterTop,
  FooterBottom,
  FooterHeader,
  FooterTitle,
} from '../../styles/FooterStyle';

export const Footer = () => (
  <Container fluid>
    <FooterTop>
      <FooterHeader xs={12} md={4}>
        <FooterTitle className="title" more>
          More information
        </FooterTitle>
        <p>
          At present, the currency converter works according to the data
          provided by the European Central Bank.
        </p>
      </FooterHeader>
      <List
        top={<ListItem data={dataForItems[0].top} title="More" />}
        bottom={<ListItem data={dataForItems[1].bottom} title="Links" />}
      />
    </FooterTop>
    <FooterBottom className="text-center">© 2020</FooterBottom>
  </Container>
);
