import { Button } from "./components/Button";

export const Checkout = ({ pizza, totalOrder }) => {
  return (
    <div className={"container"}>
      <div>
        <span className="order-item-name">Dough:</span> {pizza.SIZE},{" "}
        {pizza.DOUGH}
      </div>
      <div>
        <span className="order-item-name">Sauce:</span> {pizza.SAUCE}
      </div>
      <div>
        <span className="order-item-name">Cheese:</span> {`${pizza.CHEESE}`}
      </div>
      <div>
        <span className="order-item-name">Veggies:</span> {`${pizza.VEGGIES}`}
      </div>
      <div>
        <span className="order-item-name">Meat:</span> {`${pizza.MEAT}`}
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
