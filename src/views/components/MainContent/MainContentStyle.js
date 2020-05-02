//Style
import styled from 'styled-components';
import { Form, Col } from 'react-bootstrap';


export const StyleForFormHead = styled(Form.Label)`
  font-family: 'Pacifico', cursive;
  font-size: 24px;
  font-weight: 400;
  color: #45a6ba;
`;

export const Total = styled(Col)`
  font-family: 'Baloo Tamma 2', cursive;
  font-size: 37px;
  margin-top: 3%;
  color: #243955;
  opacity: ${props => props.opac ? "0;" : "1;"};
`;
