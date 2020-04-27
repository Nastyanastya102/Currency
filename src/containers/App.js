import PropTypes from 'prop-types';
//Redux
import { connect } from "react-redux";
import {  bindActionCreators } from "redux";
//Action 
import {fetchProductsPending} from '../actions/index'
//Component
import App from '../App';

const mapStateToProps = ({isLoad: {rates}}) =>({
    rates,
  });

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProductsPending
  }, dispatch);
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App);



App.propTypes = {
    sum: PropTypes.number,
    to: PropTypes.string,
};
  