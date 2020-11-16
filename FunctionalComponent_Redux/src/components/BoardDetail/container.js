import BoardDetail from "./presenter";

const Container = (props) => {
  const { boardDetail, getBoardDetail } = props;
  if (!boardDetail) {
    getBoardDetail();
  }

  return <BoardDetail boardDetail={boardDetail} />;
};

export default Container;
