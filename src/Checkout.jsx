import { Button } from "./components/Button";
import { INITIAL_PIZZA_CONFIG, INITIAL_PIZZA_PRICE } from "./configData";

export const Checkout = ({
  pizza = INITIAL_PIZZA_CONFIG,
  totalCost = INITIAL_PIZZA_PRICE
}) => {
  return (
    <div className="container">
      <div>
        <span className="order-item-name">Size: </span>
        <span>{pizza.SIZE[0]}</span>
      </div>
      <div>
        <span className="order-item-name">Dough: </span>
        <span>{pizza.DOUGH[0]}</span>
      </div>
      <div>
        <span className="order-item-name">Sauce: </span>
        <span>{pizza.SAUCE[0]}</span>
      </div>
      <div>
        <span className="order-item-name">Cheese: </span>
        <span>{pizza.CHEESE.join(", ")}</span>
      </div>
      <div>
        <span className="order-item-name">Veggies: </span>
        <span>{pizza.VEGGIES.join(", ")}</span>
      </div>
      <div>
        <span className="order-item-name">Meat: </span>
        <span>{pizza.MEAT.join(", ")}</span>
      </div>
      <div>
        <span className="order-item-name">Total: </span>
        <span>{totalCost} RUB</span>
      </div>
      <div className="container">
        <Button className="order-button">Order</Button>
      </div>
    </div>
  );
};
