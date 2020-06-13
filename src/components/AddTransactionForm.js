import React, { useState, useContext } from "react";
import { Grid, Card } from "@material-ui/core";
import "./TransactionDetails.css";
import { TransactionContext } from "../context/TransactionContext";

function AddTransactionForm() {
  const { addTransaction  } = useContext(TransactionContext);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TRANSACTION',  transactions: { title, amount }});
    setTitle('');
    setAmount('');
  }
  return (
    <Card>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </Card>
  );
}

export default AddTransactionForm;
