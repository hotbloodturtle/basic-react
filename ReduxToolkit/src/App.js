import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoardList } from "./slices/boards";

const App = () => {
  const dispatch = useDispatch();
  const {
    boards: { boardList },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchBoardList());
  }, [dispatch]);

  return boardList.map((item) => <div>{item.title}</div>);
};

export default App;
