import React from 'react';
//Bootstrap
import {Nav,Navbar} from 'react-bootstrap';
import { Link} from "react-router-dom";
//Style
import styled from 'styled-components';
//Logo
import Logo from '../img/money.svg';

const StyledButton = styled(Nav.Link)`
    color: goldenrod!important;
	font-size: 1.1em;
	margin: 1em;
    padding: .3em .2em;
`;
const StyledSection = styled(Navbar)`
    background-color: #1c1c1c;   
`;
const StyledLinkContainer = styled(Nav)`
    flex-direction: row;   
`;

export default function NavBar() {
        return (
            <StyledSection expand="lg" variant="light" sticky="top">   
                    <Nav.Link as={Link} to="/">     
                        <Navbar.Brand >
                            <img src={Logo} 
                            alt="logo"
                            width="50"
                            height="50"/>{' '}
                        </Navbar.Brand>
                    </Nav.Link >   
                    <StyledLinkContainer className="ml-auto">
                            <StyledButton as={Link} to="/">Home</StyledButton>
                            <StyledButton as={Link} to="/actual">Actual</StyledButton>
                    </StyledLinkContainer>
            </StyledSection>
        );
}


