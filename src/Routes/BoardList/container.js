import { connect } from "react-redux";
import { actionCreators as boardActions } from "../../redux/modules/boards";
import BoardList from "./presenter";

const Container = (props) => {
  const { boardList, getBoardList } = props;
  if (!boardList) {
    getBoardList();
  }
  return <BoardList boardList={boardList} />;
};

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
