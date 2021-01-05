import { getOrders } from "api";
import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getAuth } from "state/auth/selectors";

export const OrderListPage = () => {
  const auth = useSelector(getAuth);
  const { isError, isLoading, isSuccess, error, data } = useQuery(
    "ordersList",
    getOrders
  );
  if (isError) {
    return <div>{error.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (auth) {
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
  }
  return <div>LogIn, please!</div>;
};
