import { connect } from "react-redux";
import { actionCreators as boardActions } from "../redux/modules/boards";
import styled from "styled-components";

const BtnDelete = styled.div`
  width: 100px;
  height: 25px;
  border: 1px solid skyblue;
`;

const Container = ({ id, deleteBoard }) => {
  const _handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("삭제하시겠습니까?")) {
      deleteBoard(id);
    }
  };
  return <BtnDelete onClick={_handleSubmit}> delete </BtnDelete>;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteBoard: (id) => {
      dispatch(boardActions.deleteBoard(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Container);
