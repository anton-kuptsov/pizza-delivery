import { NavLink, Switch, Route } from "react-router-dom";
import { AddIngredient } from "./AddIngredientPage";
import { EditIngredientPage } from "./EditIngredientPage";
import { IngredientsList } from "./IngredientsListPage";

function App() {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <NavLink to="/">Список ингредиентов</NavLink>
        <NavLink to="/add-ingredient">Добавить ингредиент</NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <IngredientsList />
        </Route>
        <Route path="/add-ingredient">
          <AddIngredient />
        </Route>
        <Route path="/edit-ingredient/:id">
          <EditIngredientPage />
        </Route>
        <Route>404 error</Route>
      </Switch>
    </>
  );
}

export default App;
