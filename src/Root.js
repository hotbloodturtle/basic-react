import { Provider } from "react-redux";
import App from "./components/App";
import store from "./redux/configureStore";

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
