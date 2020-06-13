import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Typography, Grid, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    marginTop: "30px",
    borderRadius: "0px",
    marginBottom: "10px",
    backgroundColor: "#3f51b5",
  },
  root: {
    fontSize: "34px",
    fontWeight: "600",
    lineHeight: "30px",
    paddingTop: "20px",
    color: "#fff",
  },
  balance: {
    fontSize: "32px",
    fontWeight: "500",
    color: "#388e3c",
  },
});

function Balance() {
  const classes = useStyles();
  const { transactions } = useContext(TransactionContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <Grid container>
      <Grid item xs={0} md={4} />
      <Grid item xs={12} md={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.root} variant="h3">
              Your Balance
            </Typography>
            <Typography variant="h3" className={classes.balance}>
              Rs {total}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={0} md={4} />
    </Grid>
  );
}

export default Balance;
