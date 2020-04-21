import PropTypes from 'prop-types';
//Redux
import { connect } from "react-redux";
import {  bindActionCreators } from "redux";
//Action
import {getTextInput,getSum,getSumForOther,setToCur,fetchProductsPending} from '../actions';
//Component
import Content from '../components/MainContent/mainContent'

const mapStateToProps = ({isLoad}) =>({
    isLoad,
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getTextInput,
    getSum,
    getSumForOther,
    setToCur,
    fetchProductsPending
  }, dispatch)
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Content);
  
  Content.propTypes = {
    isLoad: PropTypes.object,
  };
  