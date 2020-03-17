import React from 'react';
import {Jumbotron,Container} from 'react-bootstrap';
//Styled
import styled from 'styled-components';
//Background
import Url from '../img/bc-money.jpg';

const ArbitraryComponent = styled(Jumbotron)`
  background: url(${Url}) no-repeat fixed bottom;
  background-size: cover;
  height: 200px;
`
const StyleContent = styled(Container)`
  text-align: center;
  color: goldenrod
`
export default function Jumbo() {
    return(
      <ArbitraryComponent fluid >
        <StyleContent>
          <h1>Currency converter</h1>
          <p>
          Exchange rate is the value of one currency for the purpose of conversion to another. It is also regarded as the value of one country's currency in relation to another currency.
          </p>
        </StyleContent>
      </ArbitraryComponent>
    )
}



