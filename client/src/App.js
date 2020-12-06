import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Configurator from "./Configurator";
import { LoginPage } from "./LoginPage";
import { NotFoundPage } from "./NotFoundPage";
import { SignupPage } from "./SignupPage";
import { CheckoutPage } from "./CheckoutPage";
import { OrderPage } from "./OrderPage";
import { OrderListPage } from "OrdersListPage";

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
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/orders-list">Orders List</Link>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div style={{ marginLeft: "1rem" }}>
            <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <Configurator />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        <Route path="/order">
          <OrderPage />
        </Route>
        <Route path="/orders-list">
          <OrderListPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
