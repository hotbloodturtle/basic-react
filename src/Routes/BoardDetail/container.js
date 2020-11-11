import { connect } from "react-redux";
import { actionCreators as boardActions } from "../../redux/modules/boards";
import BoardDetail from "./presenter";

const Container = (props) => {
  const { boardDetail, getBoardDetail } = props;
  if (!boardDetail) {
    getBoardDetail();
  }
  return <BoardDetail boardDetail={boardDetail} />;
};

const mapStateToProps = (state, ownProps) => {
  const {
    boards: { boardDetail },
  } = state;
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
