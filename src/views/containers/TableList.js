//Redux
import { connect } from "react-redux";
//Component
import { TableList } from '../components/Table/TableList';

const mapStateToProps = ({ state: { isLoad: { dataFromAPI }}}) =>({
  dataFromAPI,
  });

export default connect(
    mapStateToProps,
    null,
  )(TableList);
