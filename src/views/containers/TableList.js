import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TableList from '../components/TableList/TableList';
import { filterList } from '../../redux/ducks/currency/currencyDuck';

const mapStateToProps = ({ currencyApp: { dataFromAPI } }) => ({
  dataFromAPI,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      filterList,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TableList);
