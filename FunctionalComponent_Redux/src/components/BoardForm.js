const BoardForm = ({ handleSubmit, handleChange = null, data = {} }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">title </label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            style={{ border: "1px solid black" }}
          />
        </div>

        <div>
          <label htmlFor="">content </label>
          <input
            type="text"
            name="content"
            onChange={handleChange}
            style={{ border: "1px solid black" }}
          />
        </div>

        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default BoardForm;
