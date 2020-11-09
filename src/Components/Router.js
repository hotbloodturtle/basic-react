import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import BoardList from "../Routes/BoardList";

const Router = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/boards" exact component={BoardList} />
      </Switch>
    </>
  </BrowserRouter>
);

export default Router;
