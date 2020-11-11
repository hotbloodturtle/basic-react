import { useEffect } from "react";
import BoardDetail from "./presenter";

const Container = (props) => {
  const { boardDetail, getBoardDetail } = props;
  useEffect(getBoardDetail, []);

  return <BoardDetail boardDetail={boardDetail} />;
};

export default Container;
