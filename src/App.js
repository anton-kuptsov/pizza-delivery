import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import * as ROUTES from "./Routes";
import Configurator from "./Configurator";
import { NotFoundPage } from "./NotFoundPage";
import { LoginPage } from "./LoginPage";
import { SignupPage } from "./SignupPage";
import { CheckoutPage } from "./CheckoutPage";

function App() {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <div>
          <Link to={ROUTES.LOGIN}>Login</Link>
        </div>
        <div style={{ marginLeft: "1rem" }}>
          <Link to={ROUTES.SIGNUP}>Sign up</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Configurator />
        </Route>
        <Route path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.SIGNUP} component={SignupPage} />
        <Route path={ROUTES.CHECKOUT} component={CheckoutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default App;
