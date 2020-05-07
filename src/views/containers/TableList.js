import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TableList } from '../components/Table/TableList';
import { filterList } from '../../redux/ducks/moduls/currencyApp';

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
