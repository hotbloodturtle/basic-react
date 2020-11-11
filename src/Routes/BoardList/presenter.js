import styled from "styled-components";

const Test = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid blue;
`;

const BoardList = (props) => {
  const { boardList } = props;
  return (
    <>{boardList && boardList.map((board) => <Test>{board.title}</Test>)}</>
  );
};

export default BoardList;
