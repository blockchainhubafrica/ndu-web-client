import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { DashboardLayout } from "./layouts";
import { LandingPage, Dashboard, Components, Pharmacy } from "./pages";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const DashboardRoute = ({ Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <DashboardLayout>
          <Component {...props} />
        </DashboardLayout>
      )}
    />
  );
};

const AppRouter = () => {
  return (
    <Router basename={"/"}>
      <ScrollToTop />
      <Switch>
        <Route exact path="/components" render={() => <Components />} />
        <Route exact path="/dashboard" render={() => <Dashboard />} />
        <DashboardRoute
          exact
          path="/dashboard/pharmacy/generate-hash"
          Component={Pharmacy}
        />
        <Route path="/" render={() => <LandingPage />} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
