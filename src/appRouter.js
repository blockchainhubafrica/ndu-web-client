import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { PharmacyDasboard, PharmacyLogin, UserDashboard } from "./components";
import { LandingPage, Dashboard, Components } from "./pages";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const AppRouter = () => {
  return (
    <Router basename={"/"}>
      <ScrollToTop />
      <Switch>
        <Route exact path="/components" render={() => <Components />} />
        <Route exact path="/dashboard/user" render={() => <UserDashboard />} />
        <Route
          exact
          path="/dashboard/pharmacy/login"
          render={() => <PharmacyLogin />}
        />
        <Route
          exact
          path="/dashboard/pharmacy"
          render={() => <PharmacyDasboard />}
        />
        <Route path="/" render={() => <LandingPage />} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
