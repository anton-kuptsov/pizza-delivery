import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import * as ROUTES from "./Routes";
import Configurator from "./Configurator";

function App() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem"
        }}
      >
        <div>
          <Link to={ROUTES.HOME}>Home</Link>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <Link to={ROUTES.LOGIN}>Login</Link>
          </div>
          <div style={{ marginLeft: "1rem" }}>
            <Link to={ROUTES.SIGNUP}>Sign up</Link>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <Configurator />
        </Route>
        <Route path={ROUTES.LOGIN} component={ROUTES.LOGIN_PAGE} />
        <Route path={ROUTES.SIGNUP} component={ROUTES.SIGNUP_PAGE} />
        <Route path={ROUTES.CHECKOUT} component={ROUTES.CHECKOUT_PAGE} />
        <Route path={ROUTES.ORDER} component={ROUTES.ORDER_PAGE} />
        <Route component={ROUTES.NOTFOUND_PAGE} />
      </Switch>
    </>
  );
}

export default App;
