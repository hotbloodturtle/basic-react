import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8000/" });

export const boardsApi = {
  boardList: () => api.get("boards/"),
  boardDetail: (id) => api.get(`boards/${id}/`),
  boardCreate: (item) => api.post("boards/", item),
};
