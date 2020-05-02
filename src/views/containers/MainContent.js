//Redux
import { connect } from "react-redux";
import {  bindActionCreators } from "redux";
//Action
import operation from '../../state/ducks/currency/operation';
//Component
import mainContent from '../components/MainContent/MainContent'

const mapStateToProps = ( { state: { isLoad, sum } }) =>({
    isLoad,
    sum
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getTextInput: operation.getTextInput,
    getSum: operation.getSum,
    getSumForOther: operation.getSumForOther,
    setToCur: operation.setToCur,
    fetchProductsPending: operation.fetchProductsPending
  }, dispatch)
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(mainContent);
  