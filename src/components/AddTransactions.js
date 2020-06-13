import React, { useState, useContext } from "react";
import {
  Grid,
  Card,
  Typography,
  CardContent,
} from "@material-ui/core";
import "./TransactionDetails.css";
import { TransactionContext } from "../context/TransactionContext";
import { makeStyles } from "@material-ui/core/styles";
import uuid from "uuid/dist/v4";

const useStyles = makeStyles({
  card: {
    marginTop: "30px",
    borderRadius: "0px",
    marginBottom: "10px",
    backgroundColor: '#3f51b5'
  },
  root: {
    fontSize: "22px",
    fontWeight: "600",
    lineHeight: "30px",
    paddingTop: "20px",
    marginBottom: "20px",
    color: '#fff'
  },
});

function AddTransactions() {
  const { addTransaction } = useContext(TransactionContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    setTitle('');
    setAmount('');

    const newTransaction = {
      id: uuid(),
      title,
      amount: +amount
    }

    addTransaction(newTransaction);
  }
  return (
    <Grid container>
      <Grid item xs={0} md={4} />
      <Grid item xs={12} md={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.root} variant="h3">
              Your Balance Add new transaction
            </Typography>
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
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={0} md={4} />
    </Grid>
  );
}

export default AddTransactions;
