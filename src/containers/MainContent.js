import PropTypes from 'prop-types';
//Redux
import { connect } from "react-redux";
import {  bindActionCreators } from "redux";
//Action
import {getTextInput,getSum,getSumForOther,setToCur,fetchProductsPending} from '../actions';
//Component
import mainContent from '../components/MainContent/MainContent'

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
  )(mainContent);
  
  mainContent.propTypes = {
    isLoad: PropTypes.object,
};
  