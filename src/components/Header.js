import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Appbar from "@material-ui/core/AppBar";

function Header() {
  return (
    <Appbar color="primary" position="static">
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Typography variant="h3" display="inline">
            Expense
          </Typography>
          <Typography variant="h4" display="inline">
            Tracker
          </Typography>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Appbar>
  );
}

export default Header;
