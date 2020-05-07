import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TableList } from '../components/TableList';
import { filterList } from '../../redux/ducks/currency/currencyDuck';

const mapStateToProps = ({
    gettingData: { dataFromAPI },
}) => ({
  dataFromAPI,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      filterList,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TableList);
