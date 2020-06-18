import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { TransactionItem } from "./TransactionItem";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions &&
          transactions.map((transaction) => (
            <TransactionItem transaction={transaction} key={transaction.id} />
          ))}
      </ul>
    </>
  );
};
