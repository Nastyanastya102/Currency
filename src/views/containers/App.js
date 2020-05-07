import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { App } from '../App';
import { fetchProductsPending } from '../../redux/ducks/moduls/currencyApp';


const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProductsPending,
  }, dispatch);
  
export default connect(
    null,
    mapDispatchToProps,
  )(App);
