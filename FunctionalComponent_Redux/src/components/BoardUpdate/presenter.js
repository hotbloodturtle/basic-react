import BoardForm from "../BoardForm";

const BoardUpdate = ({ handleSubmit, handleChange, data }) => {
  return (
    <BoardForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      data={data}
    />
  );
};

export default BoardUpdate;
