import React from "react";

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../img/money.svg";
import {
  StyledLinkContainer,
  StyledButton,
  StyledSection,
} from "./NavBarStyle";


export const NavBar = () => {
  return (
    <StyledSection expand="lg" variant="light" sticky="top">
      <Nav.Link as={Link} to="/">
        <Navbar.Brand>
          <img src={Logo} alt="logo" width="50" height="50" />{" "}
        </Navbar.Brand>
      </Nav.Link>
      <StyledLinkContainer className="ml-auto">
        <StyledButton as={Link} to="/">
          Home
        </StyledButton>
        <StyledButton as={Link} to="/actual">
          Actual
        </StyledButton>
      </StyledLinkContainer>
    </StyledSection>
  );
}
