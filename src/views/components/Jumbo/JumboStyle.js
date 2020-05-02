//Styled
import styled from 'styled-components';
import { Jumbotron, Container } from 'react-bootstrap';
//Background
import Url from '../../../img/bc-money.jpg';

export const ArbitraryComponent = styled(Jumbotron)`
  font-family: 'Baloo Tamma 2', cursive;
  background: url(${Url}) no-repeat fixed bottom;
  background-size: cover;
  height: 400px;
`;
export const StyleContent = styled(Container)`
  text-align: center;
  color: #e3ab1a;
`;

export const Header = styled.h1`
  font-size: 4rem;
`;
