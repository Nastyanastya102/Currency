/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {
  NavBar,
  Jumbo,
  Footer,
  Content,
  TableList
} from './components';

import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled.section `
    background-color: #71717126;  
    min-height: 100vh; 
`;
const StyledSection = styled(Container) `
    margin-bottom: 100px;
`;


export const App = ({ fetchProductsPending }) => {
  useEffect(() => {
    fetchProductsPending(); 
  }, [fetchProductsPending]);

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
};

App.propTypes = {
  fetchProductsPending: PropTypes.func.isRequired,
};