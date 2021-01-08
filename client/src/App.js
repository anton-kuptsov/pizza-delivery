import React from "react";
import { Route, Switch } from "react-router-dom";
import Configurator from "./Configurator";
import { LoginPage } from "./LoginPage";
import { NotFoundPage } from "./NotFoundPage";
import { SignupPage } from "./SignupPage";
import { CheckoutPage } from "./CheckoutPage";
import { OrderPage } from "./OrderPage";
import { OrderListPage } from "./OrdersListPage";
import "./styles/base.scss";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <>
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
          <ScrollToTop />
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
