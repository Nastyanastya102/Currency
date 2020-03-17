import PropTypes from 'prop-types';
//Redux
import { connect } from "react-redux";
import {  bindActionCreators } from "redux";
//Action
import {getText,getTextInput} from '../actions';
//Component
import Content from '../components/mainContent'

const mapStateToProps = ({isLoad,random}) =>({
    isLoad,
    random,
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getText,
    getTextInput,
  }, dispatch)
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Content);
  

  Content.propTypes = {
    isLoad: PropTypes.object,
    random: PropTypes.object,
  };
  