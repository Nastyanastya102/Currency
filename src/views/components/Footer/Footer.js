import React from 'react';

import { ListItem } from './List/ListItem';
import { List } from './List/List';

import { Container } from 'react-bootstrap';
import {
  FooterTop,
  FooterBottom,
  FooterHeader,
  FooterTitle,
} from '../../styles/FooterStyle';

const dataForItems = [
  {
    top: [
      ['#', '#', '#', '#'],
      ['About', 'About me', 'About my exp.', 'About my couses'],
    ],
  },
  {
    bottom: [
      [
        'https://www.facebook.com/nastya.klyashtorna/',
        'https://www.linkedin.com/in/anastasiya-klyashtorna-55a1b719b/',
        'tel:+380930482297',
        'mailto:little.smart.bee@gmail.com',
      ],
      ['Facebook', 'Linkedin', 'Tel. number', 'Gmail'],
    ],
  },
];

export const Footer = () => {
  return (
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
}
