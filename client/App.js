import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";

function App(props) {
  return (
    <Switch>
      {/* NOTE: The first route is temporary solution, check it */}
      <Route exact path="/" render={() => props.history.push("/users")} />
      <Route exact path="/users" component={Home} />
      <Route exact path="/users/register" component={RegisterForm} />
    </Switch>
  );
}

export default withRouter(App);
