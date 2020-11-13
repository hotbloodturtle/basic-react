import { useState } from "react";
import BoardCreate from "./presenter";

const Container = (props) => {
  const { createBoard } = props;
  const [item, setItem] = useState({ title: "", content: "" });

  const _handleSubmit = (e) => {
    e.preventDefault();
    createBoard(item);
  };

  const _handleChange = (e) => {
    e.preventDefault();
    const {
      target: { value, name },
    } = e;
    setItem({ ...item, [name]: value });
  };

  return (
    <>
      <BoardCreate handleSubmit={_handleSubmit} handleChange={_handleChange} />
      <h1>{item.title}</h1>
      <h1>{item.content} </h1>
    </>
  );
};

export default Container;
