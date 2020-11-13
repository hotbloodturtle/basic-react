import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import BoardList from "./components/BoardList";
import BoardDetail from "./components/BoardDetail";
import BoardCreate from "./components/BoardCreate";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/boards/create" exact component={BoardCreate} />
        <Route path="/boards" exact component={BoardList} />
        <Route path="/boards/:id" exact component={BoardDetail} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
