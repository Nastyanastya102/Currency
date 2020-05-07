import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Favorite  from '../components/TableList/Favorite';
import { filterList } from '../../redux/ducks/currency/currencyDuck';

const mapStateToProps = ({gettingData}) => ({
  gettingData,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      filterList,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
