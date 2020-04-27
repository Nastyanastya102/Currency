import React from 'react';
import {BrowserRouter as Router,Switch, Route,} from 'react-router-dom';
//Components
import NavBar from './components/NavBar/NavBar';
import Jumbo from './components/Jumbo/Jumbo';
import Content from './containers/MainContent';
import TableList from './containers/TableList.js';
import Footer from './components/Footer/Footer.js';

//Bootstrap
import { Container } from 'react-bootstrap';
//Styles
import styled from 'styled-components';

const StyledContainer = styled.section`
    background-color: #71717126;  
    min-height: 100vh; 
`;
const StyledSection = styled(Container)`
    margin-bottom: 120px;
`;

 export default class App extends React.Component { 
  componentDidMount() {      
    this.props.fetchProductsPending();
   }
  render(){
    return (   
      <StyledContainer>   
          <Router>
            <NavBar/>
            <Jumbo/>
            <StyledSection>
              <Switch>
                <Route path="/actual" component={TableList}/>
                <Route exact path="/" component={Content}/>             
              </Switch>
            </StyledSection>
          </Router>
          <Footer/>
      </StyledContainer> 
    );
  }
}
