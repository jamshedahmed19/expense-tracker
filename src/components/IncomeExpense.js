import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Typography, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    margin: "10px 0",
    borderRadius: "0px",
    backgroundColor: "#3f51b5",
  },
  Heading: {
    fontSize: "22px",
    fontWeight: "600",
    lineHeight: "0px",
    paddingTop: "40px",
    color: "#fff",
  },
  Income: {
    fontSize: "26px",
    color: "#388e3c",
  },
  Expense: {
    fontSize: "26px",
    color: "#f44336",
  },
});

function IncomeExpense() {
  const classes = useStyles();
  const { transactions } = useContext(TransactionContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <Grid container>
      <Grid item xs={0} md={4} spacing={0} />
      <Grid item xs={6} md={2}>
        <Paper className={classes.paper}>
          <Typography className={classes.Heading} variant="h3">
            Your Income
          </Typography>
          <Typography variant="h3" className={classes.Income}>
            {income}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} md={2}>
        <Paper className={classes.paper}>
          <Typography className={classes.Heading} variant="h3">
            Your Expenses
          </Typography>
          <Typography variant="h3" className={classes.Expense}>
            {expense}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={0} md={4} />
    </Grid>
  );
}

export default IncomeExpense;
