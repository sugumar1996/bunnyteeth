import HomeContainer from "containers/HomeContainer/HomeContainer";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../utility/constants/constants";

export default () => {
  return (
    <Switch>
      <Route exact path={routes.ROOT} component={HomeContainer} />
      <Route exact path="*" component={() => <Redirect to={routes.ROOT} />} />
    </Switch>
  );
};
