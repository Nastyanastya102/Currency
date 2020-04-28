//Redux
import { connect } from "react-redux";
import {  bindActionCreators } from "redux";
//Action 
import {fetchProductsPending} from '../actions/index'
//Component
import App from '../App';

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProductsPending
  }, dispatch);
  
export default connect(
    null,
    mapDispatchToProps,
  )(App);
