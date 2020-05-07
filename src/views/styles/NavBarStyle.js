import styled from 'styled-components';
import { Nav, Navbar } from 'react-bootstrap';

export const StyledLinkContainer = styled(Nav)`
  flex-direction: row;
`;
export const StyledButton = styled(Nav.Link)`
  font-family: 'Pacifico', cursive;
  font-size: 1.5em;
  margin: 0 1em;
  padding: 0.2em;
  color: #e3ab1a;
`;
export const StyledSection = styled(Navbar)`
  background-color: #1c1c1c;
`;
