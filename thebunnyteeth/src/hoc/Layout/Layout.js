import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "components/UI/loader/Loader";
//layout components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const Layout = (props) => {
  const { user } = useSelector((state) => state.authReducer);
  return (
    <div id="wrap" className="logSignup_wrap">
      <Loader />
      <Header {...props} user={user} />
      {props.children}
      <Footer {...props} />
    </div>
  );
};

export default withRouter(Layout);
