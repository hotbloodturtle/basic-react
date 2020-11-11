import { boardsApi } from "../../api";

// actions
const SET_BOARD_LIST = "GET_BOARD_LIST";

// action creators
function setBoardList(boardList) {
  return {
    type: SET_BOARD_LIST,
    boardList,
  };
}

// API actions
function getBoardList() {
  return (dispatch, getState) => {
    boardsApi
      .boardList()
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch(setBoardList(data));
      });
  };
}

// Initial State
const initialState = {};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_BOARD_LIST:
      return applySetBoardList(state, action);
    default:
      return state;
  }
}

// Reducer Functions
function applySetBoardList(state, action) {
  const { boardList } = action;
  return {
    ...state,
    boardList,
  };
}

// Export
const actionCreators = {
  getBoardList,
};
export { actionCreators };

// Export reducer by default
export default reducer;
