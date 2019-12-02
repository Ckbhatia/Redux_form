import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";
import EditForm from "./components/EditForm";
import "./App.scss";

function App(props) {
  return (
    <Switch>
      {/* NOTE: The first route is temporary solution, check it */}
      <Route exact path="/" render={() => props.history.push("/users")} />
      <Route exact path="/users" component={Home} />
      <Route exact path="/users/register" component={RegisterForm} />
      <Route path="/users/edit/:username" component={EditForm} />
    </Switch>
  );
}

export default withRouter(App);
