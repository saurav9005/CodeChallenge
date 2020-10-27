import React, { Component } from "react";
import { Container, Grid, withStyles, Paper } from "@material-ui/core";
import PaymentMain from "../Plan/PaymentMain";
import UserProfile from "../UserDashboard/UserProfile";
import SetPrice from "../Pricing/SetPrice.js";

const styles = {
  container: {
    display: "flex",
  },
  paper: {
    minheight: 200,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
};

class MainLayout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="lg">
        <Grid container spacing={5} justify="flex-start">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper className={classes.paper}>
              <PaymentMain />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper className={classes.paper}>
              <UserProfile />
            </Paper>
            <Paper className={classes.paper}>
              <SetPrice />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(MainLayout);
