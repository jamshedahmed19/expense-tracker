import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import TransactionDetails from "./TransactionDetails.js";
import { Typography, Grid } from "@material-ui/core";
import "./TransactionDetails.css";

function TransactionList() {
  const { transactions } = useContext(TransactionContext);
  return transactions.length ? (
    <Grid container>
      <Grid item xs={0} md={4} />
      <Grid item xs={12} md={4}>
        <Typography variant="h5" display="inline">
          Transaction History
        </Typography>
        <ul className="list">
        {transactions.map(transaction => (<TransactionDetails key={transaction.id} transaction={transaction} />))}
        </ul>
      </Grid>
      <Grid item xs={0} md={4} />
    </Grid>
  ) : (
    <Typography>You have no transaction history</Typography>
  );
}

export default TransactionList;
