import { Link } from "react-router-dom";
import styled from "styled-components";
import BoardDelete from "../BoardDelete";

const Container = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid blue;
`;

const BtnUpdate = styled.div`
  width: 100px;
  height: 25px;
  border: 1px solid green;
`;

const Board = ({ id, title }) => {
  return (
    <>
      <Link to={`/boards/${id}`}>
        <Container>{title}</Container>
      </Link>
      <Link to={`/boards/update/${id}`}>
        <BtnUpdate>update</BtnUpdate>
      </Link>
      <BoardDelete id={id} />
    </>
  );
};

const BoardList = (props) => {
  const { boardList } = props;
  return (
    <>
      <Link to={"/boards/create"}>create</Link>
      {boardList && boardList.map((item) => <Board {...item} key={item.id} />)}
    </>
  );
};

export default BoardList;
