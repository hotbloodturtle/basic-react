import { connect } from "react-redux";
import { actionCreators as boardActions } from "../../redux/modules/boards";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const {
    boards: { boardList },
  } = state;
  return { boardList };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getBoardList: () => {
      dispatch(boardActions.getBoardList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
