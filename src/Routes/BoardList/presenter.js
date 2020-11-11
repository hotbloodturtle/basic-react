import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid blue;
`;

const Board = ({ id, title }) => {
  return (
    <Link to={`/boards/${id}`}>
      <Container>{title}</Container>
    </Link>
  );
};

const BoardList = (props) => {
  const { boardList } = props;
  return (
    <>
      {boardList && boardList.map((item) => <Board {...item} key={item.id} />)}
    </>
  );
};

export default BoardList;
