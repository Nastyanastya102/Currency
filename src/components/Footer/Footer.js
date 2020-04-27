import React from 'react';
import { Container} from 'react-bootstrap';
import ListItem from './List/ListItem';
import List from './List/List';
//Styled
import {FooterTop, FooterBottom,FooterHeader,FooterTitle} from './FooterStyle';



export default function Footer() {
    return(
      <Container fluid>
          <FooterTop>
            <FooterHeader xs={4}>
                <FooterTitle className="title">Some information</FooterTitle>
                <p>
                At present, the currency converter works according to the data provided by the European Central Bank.
                </p>
            </FooterHeader>
            <List
            top={
                <ListItem 
                title="About"
                fist="About me"
                sec="About my exp."
                ther="About my project"
                forth="About my couses"/> 
            }
            bottom={
                <ListItem 
                title="Contacts"
                fist=" Facebook"
                sec="Linked"
                ther="Vk"
                forth="Gmail"/>  
            }
            />                                
        </FooterTop>
          <FooterBottom className="text-center">
          © 2020
          </FooterBottom>
      </Container>
    )
}



