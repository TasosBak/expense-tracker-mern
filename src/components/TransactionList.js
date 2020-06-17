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
        <li className="minus">
          Cash <span>-$400</span>
          <button className="delete-btn">x</button>
        </li>
        {transactions &&
          transactions.map((transaction) => (
            <TransactionItem transaction={transaction} key={transaction.id} />
          ))}
      </ul>
    </>
  );
};
