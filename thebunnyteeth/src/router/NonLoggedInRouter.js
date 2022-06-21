import AboutContainer from "containers/AboutContainer/AboutContainer";
import GeneralDentistryContainer from "containers/GeneralDentistryContainer/GeneralDentistryContainer";
import HomeContainer from "containers/HomeContainer/HomeContainer";
import SmileMakeOverContainer from "containers/SmileMakeOverContainer/SmileMakeOverContainer";
import TreatmentsContainer from "containers/TreatmentsContainer/TreatmentsContainer";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../utility/constants/constants";


export default () => {
  return (
    <Switch>
      <Route exact path={routes.HOME_BLOG} component={HomeContainer} />
      <Route exact path={routes.ABOUT} component={AboutContainer} />
      <Route exact path={routes.TREATMENTS} component={TreatmentsContainer} />
      <Route exact path={routes.GENERAL_DENTISTRY} component={GeneralDentistryContainer} />
      <Route exact path={routes.SMILE_MAKE_OVER} component={SmileMakeOverContainer} />
      <Route exact path="*" component={() => <Redirect to={routes.HOME_BLOG} />} />
    </Switch>
  );
};
