//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import mainContent from '../components/MainContent/MainContent';
import {getTextInput, getSumValue, setToCur, fetchProductsPending} from '../../redux/ducks/currencyDuck';

const mapStateToProps = ({currencyApp, getSum}) => ({
  currencyApp,
  sum: getSum,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getTextInput,
  getSumValue,
  setToCur,
  fetchProductsPending,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(mainContent);
