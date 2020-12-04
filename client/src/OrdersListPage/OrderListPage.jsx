import { getOrders } from "api";
import React from "react";
import { useQuery } from "react-query";

export const OrderListPage = () => {
  const { isError, isLoading, isSuccess, error, data } = useQuery(
    "ordersList",
    getOrders
  );
  console.log(data);
  return (
    <div>
      {isSuccess &&
        data.map((item, i) => {
          return (
            <div key={item.name + i} style={{ margin: "0.5rem" }}>
              <div>
                Order <b>{item.name}</b>({item.ingredients})
              </div>
              <div>Status: delivered</div>
            </div>
          );
        })}
    </div>
  );
};
