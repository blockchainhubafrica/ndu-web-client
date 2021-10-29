import React, { useEffect } from "react";
import { WalletProvider } from "./contexts/userContext";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import {
  Components,
  LandingPage,
  PharmacyDasboard,
  PharmacyDrugInventory,
  PharmacyGenHash,
  PharmacyHashListing,
  RegisterPharmacy,
  UserDashboard,
} from "./pages";

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
      <WalletProvider>
        <Switch>
          <Route exact path="/components" render={(props) => <Components />} />
          <Route
            exact
            path="/dashboard/user"
            render={(props) => <UserDashboard />}
          />
          <Route
            exact
            path="/dashboard/pharmacy"
            render={(props) => <PharmacyDasboard />}
          />
          <Route
            exact
            path="/dashboard/pharmacy/login"
            render={(props) => <RegisterPharmacy />}
          />
          <Route
            exact
            path="/dashboard/pharmacy/generate-hash"
            render={(props) => <PharmacyGenHash />}
          />
          <Route
            exact
            path="/dashboard/pharmacy/drugs"
            render={(props) => <PharmacyDrugInventory />}
          />
          <Route
            exact
            path="/dashboard/pharmacy/drugs/:id"
            render={(props) => <PharmacyHashListing />}
          />
          <Route path="/dashboard" render={(props) => <UserDashboard />} />
          <Route path="/" render={(props) => <LandingPage />} />
          <Route path="*" render={(props) => <Redirect to="/" />} />
        </Switch>
      </WalletProvider>
    </Router>
  );
};

export default AppRouter;
