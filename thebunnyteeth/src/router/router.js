import React, { Suspense } from "react";
import Loader from "../components/UI/loader/Loader";
import Layout from "../hoc/Layout/Layout";
import NonLoggedInRouter from "./NonLoggedInRouter";
const LoggedInRouter = React.lazy(() => import("./LoggedInRouter"));

const Router = (props) => {
  let routeList = null;
  if (props.user && props.token) {
    routeList = <LoggedInRouter />;
  } else {
    routeList = <NonLoggedInRouter />;
  }

  return (
    <Layout>
      <Suspense fallback={<Loader lazyLoad={true} />}>{routeList}</Suspense>
    </Layout>
  );
};

export default Router;
