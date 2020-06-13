import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import "./TransactionDetails.css";

function TransactionDetails({ transaction }) {
  const { removeTransaction } = useContext(TransactionContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
    {transaction.title} <span>{sign}Rs {Math.abs(transaction.amount)}</span><button onClick={() => removeTransaction(transaction.id)} className="delete-btn">x</button>
  </li>
  );
}
export default TransactionDetails;
