import PropTypes from 'prop-types';
//Redux
import { connect } from "react-redux";
import {  bindActionCreators } from "redux";
//Action
import {getTextInput,getSum,getSumForOther,setBaseCur,setToCur} from '../actions';
//Component
import Content from '../components/mainContent'

const mapStateToProps = ({isLoad,sum}) =>({
    isLoad,
    sum,
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getTextInput,
    getSum,
    getSumForOther,
    setBaseCur,
    setToCur
  }, dispatch)
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Content);
  

  Content.propTypes = {
    isLoad: PropTypes.object,
    sum: PropTypes.object,
  };
  