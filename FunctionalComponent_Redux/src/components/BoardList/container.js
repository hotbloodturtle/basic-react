import BoardList from "./presenter";

const Container = (props) => {
  const { boardList, getBoardList } = props;
  if (!boardList) {
    getBoardList();
  }
  return <BoardList boardList={boardList} />;
};

export default Container;
