//Styled
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';


export const FooterTop = styled(Row)`
  background-color: #45a6ba;
  padding: 2% 1%;
  font-weight: 600;
`;

export const FooterBottom = styled(Row)`
   background-color: #0970c2;
   padding: 12px 0;
   justify-content: center;
   font-size: 15px;
   font-weight: 700;
`;

export const FooterTitle = styled.h5` 
  font-family: 'Baloo Tamma 2', cursive;
  font-size: ${props => props.more ? "2.3rem;" : "1.7rem;"};
  text-align: center;
`;

export const FooterHeader = styled(Col)` 
  align-self: center;
`;


export const Footer = styled.div` 
    .list-group-item, .list-group-item:last-child, .list-group-item.active{
        padding: .25rem 1.25rem;
        background-color: transparent;
        border: 0;
        border-bottom: .3px solid #1c1c1c80;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;         
        color: #495057;
      &:hover {
        color: #18295ade; 
      }   
    }
`;
