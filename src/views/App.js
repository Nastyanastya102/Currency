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

import { StyledContainer, StyledSection } from './styles/App';


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