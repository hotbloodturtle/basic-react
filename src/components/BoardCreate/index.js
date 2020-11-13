import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as boardActions } from "../../redux/modules/boards";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createBoard: (item) => {
      dispatch(boardActions.createBoard(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(Container);
