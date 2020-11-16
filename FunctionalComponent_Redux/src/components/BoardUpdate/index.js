import { connect } from "react-redux";
import { actionCreators as boardActions } from "../../redux/modules/boards";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const {
    boards: { boardDetail },
  } = state;

  if (!boardDetail) {
    return {};
  }

  const {
    match: {
      params: { id },
    },
  } = ownProps;
  if (parseInt(boardDetail.id) !== parseInt(id)) {
    return {};
  }

  return { boardDetail };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    getBoardDetail: () => {
      dispatch(boardActions.getBoardDetail(id));
    },
    updateBoard: (item) => {
      dispatch(boardActions.updateBoard(item));
    },
    setBoardDetail: (item) => {
      dispatch(boardActions.setBoardDetail(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
