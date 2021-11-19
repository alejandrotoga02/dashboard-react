import React, { useEffect, useState } from "react";
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
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

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
  const [year, setYear] = useState("2021");
  const [month, setMonth] = useState("03");

  const handleChangeYear = (event) => {
    setYear(event.target.value);
    dispatch(
      fetchDashboard({
        month: month,
        year: event.target.value,
      })
    );
  };
  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
    dispatch(
      fetchDashboard({
        month: event.target.value,
        year: year,
      })
    );
  };

  useEffect(
    () =>
      dispatch(
        fetchDashboard({
          month: month,
        })
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  return (
    !dashboardLoading && (
      <Grid container spacing={3}>
        <Grid item xs={6} md={6}>
          <FormControl fullWidth>
            <InputLabel id="label-for-year">Año</InputLabel>
            <Select
              id="select-year"
              value={year}
              label="Year"
              onChange={handleChangeYear}
            >
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
              <MenuItem value={2019}>2019</MenuItem>
              <MenuItem value={2018}>2018</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6} md={6}>
          <FormControl fullWidth>
            <InputLabel id="label-for-month">Mes</InputLabel>
            <Select
              id="select-month"
              value={month}
              label="Month"
              onChange={handleChangeMonth}
            >
              <MenuItem value={"01"}>Enero</MenuItem>
              <MenuItem value={"02"}>Febrero</MenuItem>
              <MenuItem value={"03"}>Marzo</MenuItem>
              <MenuItem value={"04"}>Abril</MenuItem>
              <MenuItem value={"05"}>Mayo</MenuItem>
              <MenuItem value={"06"}>Junio</MenuItem>
              <MenuItem value={"07"}>Julio</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* General */}
        <Grid item xs={12} md={4} lg={6}>
          <Paper className={fixedHeightPaper}>
            <General />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={fixedHeightPaper}>
            <ByMunicipalityChart month={month} year={year} />
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
