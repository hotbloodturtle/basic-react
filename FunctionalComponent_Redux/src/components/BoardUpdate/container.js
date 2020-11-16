import BoardUpdate from "./presenter";

const Container = (props) => {
  const { updateBoard, boardDetail, getBoardDetail, setBoardDetail } = props;
  if (!boardDetail) {
    getBoardDetail();
  }

  const _handleSubmit = (e) => {
    e.preventDefault();
    updateBoard(boardDetail);
  };

  const _handleChange = (e) => {
    e.preventDefault();
    const {
      target: { value, name },
    } = e;
    setBoardDetail({ ...boardDetail, [name]: value });
  };

  return (
    <>
      <BoardUpdate
        handleSubmit={_handleSubmit}
        handleChange={_handleChange}
        data={boardDetail}
      />
      {boardDetail && <h1>{boardDetail.title}</h1>}
      {boardDetail && <h1>{boardDetail.content}</h1>}
    </>
  );
};

export default Container;
