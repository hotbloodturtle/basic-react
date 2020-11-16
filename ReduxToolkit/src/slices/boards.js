import { createSlice } from "@reduxjs/toolkit";
import { boardsApi } from "../api";

const slice = createSlice({
  name: "boards",
  initialState: {
    boardList: [],
  },
  reducers: {
    setBoardList: (state, action) => {
      state.boardList = action.payload;
    },
  },
});

export default slice.reducer;

const { setBoardList } = slice.actions;

export const fetchBoardList = () => {
  return (dispatch) => {
    boardsApi
      .boardList()
      .then((response) => dispatch(setBoardList(response.data)));
  };
};
