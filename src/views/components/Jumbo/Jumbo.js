import React from 'react';
//Styled
import { ArbitraryComponent, StyleContent, Header} from './JumboStyle';



export  function Jumbo() {
    return(
      <ArbitraryComponent fluid >
        <StyleContent>
         <Header>Currency converter</Header>
          <p>
          Exchange rate is the value of one currency for the purpose of conversion to another. It is also regarded as the value of one country's currency in relation to another currency.
          </p>
        </StyleContent>
      </ArbitraryComponent>
    )
}



