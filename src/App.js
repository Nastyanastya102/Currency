import React from 'react';
import {BrowserRouter as Router,Switch, Route,} from 'react-router-dom';
//Components
import NavBar from './components/NavBar/navBar';
import Jumbo from './components/Jumbo/jumbo';
import Content from './containers/inputStore';
//Bootstrap
import { Container } from 'react-bootstrap';
//Styles
import styled from 'styled-components';

const StyledContainer = styled.section`
    background-color: #1c1213;  
    height: 100vh; 
`;

function Second() {
  return <h2>Still empty</h2>;
}

 export default class App extends React.Component { 
  render(){
    return (   
      <StyledContainer>   
          <Router>
            <NavBar/>
            <Jumbo/>
            <Container>
              <Switch>
                <Route path="/actual" component={Second}/>
                <Route exact path="/" component={Content}/>             
              </Switch>
            </Container>
          </Router>
      </StyledContainer> 
    );
  }
}
