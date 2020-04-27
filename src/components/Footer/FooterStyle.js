//Styled
import styled from 'styled-components';
import {Row,Col} from 'react-bootstrap';


export const FooterTop = styled(Row)`
  background-color: #45a6ba;
  padding: 1%;
  font-weight: 600;
`;

export const FooterBottom = styled(Row)`
   background-color: #0970c2;
   padding: 15px 0;
   justify-content: center;
   font-size: 18px;
   font-weight: 700;
`;

export const FooterTitle = styled.h5` 
  font-size: 2rem;
`;

export const FooterHeader = styled(Col)` 
  align-self: center;
`;


export const Footer = styled.div` 
    .list-group-item{
      padding: .25rem 1.25rem;
    }
`;
