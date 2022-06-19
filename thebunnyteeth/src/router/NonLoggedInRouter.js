import AboutContainer from "containers/AboutContainer/AboutContainer";
import HomeContainer from "containers/HomeContainer/HomeContainer";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../utility/constants/constants";


export default () => {
  return (
    <Switch>
      <Route exact path={routes.HOME_BLOG} component={HomeContainer} />
      <Route exact path={routes.ABOUT} component={AboutContainer} />
      <Route exact path="*" component={() => <Redirect to={routes.HOME_BLOG} />} />
    </Switch>
  );
};
