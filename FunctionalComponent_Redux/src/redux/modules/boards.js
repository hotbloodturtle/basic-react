import { boardsApi } from "../../api";

// actions
const SET_BOARD_LIST = "GET_BOARD_LIST";
const SET_BOARD_DETAIL = "GET_BOARD_DETAIL";

// action creators
function setBoardList(boardList) {
  return {
    type: SET_BOARD_LIST,
    boardList,
  };
}
function setBoardDetail(boardDetail) {
  return {
    type: SET_BOARD_DETAIL,
    boardDetail,
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
function getBoardDetail(id) {
  return (dispatch, getState) => {
    boardsApi
      .boardDetail(id)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch(setBoardDetail(data));
      });
  };
}
function createBoard(item) {
  return (dispatch) => {
    boardsApi
      .boardCreate(item)
      .then((response) => {
        dispatch(() => {
          window.location.href = "/boards";
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

function updateBoard(item) {
  return (dispatch) => {
    boardsApi
      .boardUpdate(item)
      .then((response) => {
        dispatch(() => {
          window.location.href = "/boards";
        });
      })
      .catch((err) => {
        console.log(err);
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
    case SET_BOARD_DETAIL:
      return applySetBoardDetail(state, action);
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
function applySetBoardDetail(state, action) {
  const { boardDetail } = action;
  return {
    ...state,
    boardDetail,
  };
}

// Export
const actionCreators = {
  getBoardList,
  getBoardDetail,
  createBoard,
  updateBoard,
  setBoardDetail,
};
export { actionCreators };

// Export reducer by default
export default reducer;
