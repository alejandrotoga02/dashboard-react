import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import General from "./General";
import ByMunicipalityChart from "./charts/ByMunicipalityChart";
import LineChart from "./charts/LineChart";
import ByYearChart from "./charts/ByYearChart";
import ByMonthDifferentYear from "./charts/ByMonthDifferentYear";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "./../common/reducers/dashboardReducer";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 340,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const { dashboardLoading } = useSelector((state) => state.dashboard);

  const dispatch = useDispatch();

  useEffect(
    () =>
      dispatch(
        fetchDashboard({
          month: 3,
        })
      ),
    [dispatch]
  );

  return (
    !dashboardLoading && (
      <Grid container spacing={3}>
        {/* General */}
        <Grid item xs={12} md={4} lg={6}>
          <Paper className={fixedHeightPaper}>
            <General />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={fixedHeightPaper}>
            <ByMunicipalityChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={8} lg={6}>
          <Paper className={fixedHeightPaper}>
            <ByYearChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={8} lg={6}>
          <Paper className={fixedHeightPaper}>
            <ByMonthDifferentYear />
          </Paper>
        </Grid>

        {/* Line Chart */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <LineChart />
          </Paper>
        </Grid>
      </Grid>
    )
  );
};

export default Dashboard;
