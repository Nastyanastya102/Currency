import React from 'react';
import {ListGroup} from 'react-bootstrap';
//Styled
import {Footer} from '../FooterStyle';
export default function Item(props) {
    return(
                <ListGroup as="ul" >
                    <Footer>
                        <h5>{props.title}</h5>
                        <ListGroup.Item as="li" action >
                            {props.fist}
                        </ListGroup.Item>
                        <ListGroup.Item as="li" action >
                            {props.sec}
                        </ListGroup.Item>
                        <ListGroup.Item as="li" action >
                            {props.ther}
                        </ListGroup.Item>
                        <ListGroup.Item as="li" action >
                            {props.forth}
                        </ListGroup.Item>
                    </Footer>
                </ListGroup>
    )
}


