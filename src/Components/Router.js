import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import BoardList from "../routes/BoardList";
import BoardDetail from "../routes/BoardDetail";

const Router = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/boards" exact component={BoardList} />
        <Route path="/boards/:id" exact component={BoardDetail} />
      </Switch>
    </>
  </BrowserRouter>
);

export default Router;
