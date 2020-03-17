import React from 'react';
import {BrowserRouter as Router,Switch, Route,} from 'react-router-dom';
//Components
import NavBar from './components/navBar';
import Jumbo from './components/jumbo';
import Content from './containers/valueState';
//Bootstrap
import { Container } from 'react-bootstrap';
//Style


function Second() {
  return <h2>Still empty</h2>;
}

 export default class App extends React.Component { 
  render(){
    return (       
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
    );
  }
}
