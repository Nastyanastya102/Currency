//Redux
import { connect } from "react-redux"
import {  bindActionCreators } from "redux"
//Action 
import operation from '../../state/ducks/currency/operation'
import { App } from '../App';

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProductsPending:  operation.fetchProductsPending
  }, dispatch);
  
export default connect(
    null,
    mapDispatchToProps,
  )(App);
