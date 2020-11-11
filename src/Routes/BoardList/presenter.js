import styled from "styled-components";

const Test = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
`;

const BoardList = (props) => {
  const { boardList } = props;
  return (
    <>
      <h1>hi I'm board list</h1>
      {boardList && boardList.map((board) => <Test>{board.title}</Test>)}
    </>
  );
};

export default BoardList;
