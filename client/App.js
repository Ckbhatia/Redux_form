import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/Home";

function App(props) {
  return (
    <Switch>
      {/* NOTE: The first route is temporary solution, check it */}
      <Route exact path="/" render={() => props.history.push("/users")} />
      <Route path="/users" component={Home} />
    </Switch>
  );
}

export default withRouter(App);
