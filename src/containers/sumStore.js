import PropTypes from 'prop-types';
//Redux
import { connect } from "react-redux";
//Component
import {Sum} from '../components/MainContent/sum'

const mapStateToProps = ({isLoad: {to},sum: {sum}}) =>({
    sum,
    to,
  });
  
export default connect(
    mapStateToProps,
    null,
  )(Sum);
  
Sum.propTypes = {
    sum: PropTypes.number,
    to: PropTypes.string,
};
  