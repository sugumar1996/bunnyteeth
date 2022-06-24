import AboutContainer from "containers/AboutContainer/AboutContainer";
import BridgesContainer from "containers/BridgesContainer/BridgesContainer";
import ClearAligenersContainer from "containers/ClearAligenersContainer/ClearAligenersContainer";
import DentalImplantsContainer from "containers/DentalImplantsContainer/DentalImplantsContainer";
import DenturesContainer from "containers/DenturesContainer/DenturesContainer";
import GeneralDentistryContainer from "containers/GeneralDentistryContainer/GeneralDentistryContainer";
import HomeContainer from "containers/HomeContainer/HomeContainer";
import KidsDensitryContainer from "containers/KidsDensitryContainer/KidsDensitryContainer";
import OrthodonticContainer from "containers/OrthodonticContainer/OrthodonticContainer";
import SedationDensitryContainer from "containers/SedationDensitryContainer/SedationDensitryContainer";
import SmileMakeOverContainer from "containers/SmileMakeOverContainer/SmileMakeOverContainer";
import TestmonialsContainer from "containers/TestmonialsContainer/TestmonialsContainer";
import TreatmentsContainer from "containers/TreatmentsContainer/TreatmentsContainer";
import WisdowToothContainer from "containers/WisdowToothContainer/WisdowToothContainer";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../utility/constants/constants";


export default () => {
  return (
    <Switch>
      <Route exact path={routes.HOME_BLOG} component={HomeContainer} />
      <Route exact path={routes.ABOUT} component={AboutContainer} />
      <Route exact path={routes.TREATMENTS} component={TreatmentsContainer} />
      <Route exact path={routes.TESTMONIALS} component={TestmonialsContainer} />
      <Route exact path={routes.DENTAL_IMPLANTS} component={DentalImplantsContainer} />
      <Route exact path={routes.GENERAL_DENTISTRY} component={GeneralDentistryContainer} />
      <Route exact path={routes.SMILE_MAKE_OVER} component={SmileMakeOverContainer} />
      <Route exact path={routes.KIDS_DENTISTRY} component={KidsDensitryContainer} />
      <Route exact path={routes.SEDATION_DENTISTY} component={SedationDensitryContainer} />
      <Route exact path={routes.DENTURES} component={DenturesContainer} />
      <Route exact path={routes.BRIDHES_CROWNS} component={BridgesContainer} />
      <Route exact path={routes.CLEAR_ALIGNERS_INVISIBLE_BRACES} component={ClearAligenersContainer} />
      <Route exact path={routes.ORTHODONTIC_TREATMENT} component={OrthodonticContainer} />
      <Route exact path={routes.WISDOW_TOOTH_REMOVAL} component={WisdowToothContainer} />
      <Route exact path={routes.ROOT_CANAL} component={KidsDensitryContainer} />

      <Route exact path="*" component={() => <Redirect to={routes.HOME_BLOG} />} />
    </Switch>
  );
};
