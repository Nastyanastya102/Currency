//Redux
import { connect } from "react-redux";
//Component
import { Sum } from '../components/MainContent/sum';

const mapStateToProps = ({ state: { isLoad: { formGridTo }, sum: { sum }}}) =>({
    sum,
    formGridTo,
  });
  
export default connect(
    mapStateToProps,
    null,
  )(Sum);
  