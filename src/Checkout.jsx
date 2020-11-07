import { Button } from "./components/Button";

export const Checkout = ({ pizza, totalOrder }) => {
  return (
    <div className={"container"}>
      <div>
        <span className="order-item-name">Dough:</span> {pizza.size},{" "}
        {pizza.dough}
      </div>
      <div>
        <span className="order-item-name">Sauce:</span> {pizza.sauce}
      </div>
      <div>
        <span className="order-item-name">Cheese:</span> {`${pizza.cheese}`}
      </div>
      <div>
        <span className="order-item-name">Veggies:</span> {`${pizza.veggies}`}
      </div>
      <div>
        <span className="order-item-name">Meat:</span> {`${pizza.meat}`}
      </div>
      <div>
        <span className="order-item-name">Total:</span> {totalOrder} RUB
      </div>
      <div className="container">
        <Button className="order-button">Order</Button>
      </div>
    </div>
  );
};
