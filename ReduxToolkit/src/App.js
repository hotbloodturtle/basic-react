import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoardList } from "./slices/boards";

const App = () => {
  const dispatch = useDispatch();
  const { boardList } = useSelector((state) => state.boards);

  useEffect(() => {
    dispatch(fetchBoardList());
    console.log("effect");
    return () => {
      console.log("cleanup");
    };
  }, [dispatch]);

  return (
    <>
      {boardList.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
};

export default App;
