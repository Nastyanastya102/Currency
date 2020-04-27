import PropTypes from 'prop-types';
//Redux
import { connect } from "react-redux";
//Component
import TableList from '../components/Table/TableList';

const mapStateToProps = ({isLoad: {rates}}) =>({
   rates,
  });

export default connect(
    mapStateToProps,
    null,
  )(TableList);
  
TableList.propTypes = {
    rates: PropTypes.array
};
  