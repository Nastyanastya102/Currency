import React from 'react';
//Bootstrap
import { Container} from 'react-bootstrap';
//Components
import ListItem from './List/ListItem';
import List from './List/List';
//Styled
import { FooterTop, FooterBottom,FooterHeader, FooterTitle} from './FooterStyle';



export function Footer() {
    return(
      <Container fluid>
          <FooterTop>
            <FooterHeader xs={12} md={4}>
                <FooterTitle className="title" more>More information</FooterTitle>
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
                forth="About my couses"
                firsHr="#"
                secHr="#"
                thersHr="#"
                foursHr="#"/>
            }
            bottom={
                <ListItem 
                title="Contacts"
                fist=" Facebook"
                sec="Linked"
                ther="Tel. number"
                forth="Gmail"
                firsHr="https://www.facebook.com/nastya.klyashtorna/"
                secHr="https://www.linkedin.com/in/anastasiya-klyashtorna-55a1b719b/"
                thersHr="tel:+380930482297"
                foursHr="mailto:little.smart.bee@gmail.com"/>  
            }
            />                                
        </FooterTop>
          <FooterBottom className="text-center">
          © 2020
          </FooterBottom>
      </Container>
    )
}



