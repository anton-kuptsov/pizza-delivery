import { NavLink, Switch, Route } from "react-router-dom";
import { AddProductPage } from "./AddProductPage";
import { ProductsList } from "./ProductsListPage";

function App() {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <NavLink to="/">Add ingridient</NavLink>
        <NavLink to="/ingridients">Ingridients List</NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <AddProductPage />
        </Route>
        <Route path="/ingridients">
          <ProductsList />
        </Route>
        <Route>404 error</Route>
      </Switch>
    </>
  );
}

export default App;
