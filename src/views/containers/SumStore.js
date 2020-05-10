import { connect } from 'react-redux';

import { Sum } from '../components/MainContent/sum';

const mapStateToProps = ({ currencyApp: { formGridTo }, getSum: { sum } }) => ({
  sum,
  formGridTo,
  });
  
export default connect(
  mapStateToProps,
  null,
)(Sum);
  