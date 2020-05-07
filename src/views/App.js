import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router,Switch, Route,} from 'react-router-dom';

import {NavBar} from './components/NavBar/NavBar';
import {Jumbo} from './components/Jumbo/Jumbo';
import {Footer} from './components/Footer/Footer.js';
import Content from './containers/MainContent';
import TableList from './containers/TableList.js';

import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled.section`
    background-color: #71717126;  
    min-height: 100vh; 
`;
const StyledSection = styled(Container)`
    margin-bottom: 100px;
`;


export  class App extends React.Component { 
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
};


App.propTypes = {
  fetchProductsPending: PropTypes.func.isRequired,
};