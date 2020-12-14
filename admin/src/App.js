import { NavLink, Switch, Route } from "react-router-dom";
import { AddProductPage } from "./AddProductPage";
import { ProductsList } from "./ProductsListPage";

function App() {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <NavLink to="/">Add ingredient</NavLink>
        <NavLink to="/ingredients">Ingredients List</NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <AddProductPage />
        </Route>
        <Route path="/ingredients">
          <ProductsList />
        </Route>
        <Route>404 error</Route>
      </Switch>
    </>
  );
}

export default App;
